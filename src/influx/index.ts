import {InfluxDB} from '@influxdata/influxdb-client'
import {OrgsAPI, BucketsAPI, TasksAPI, Organizations} from '@influxdata/influxdb-client-apis'

import {logger} from '../logger'
import {setup as setupDbSize} from './tasks/dbsize'
import {setup as setupMarketprices} from './tasks/marketprices'
import {setup as setupREX} from './tasks/rex'

const INFLUX_URL = Bun.env.UNICOVE_INFLUX_URL
const INFLUX_TOKEN = Bun.env.UNICOVE_INFLUX_TOKEN
export const INFLUX_PRECISE_RETENTION = Bun.env.UNICOVE_INFLUX_PRECISE_RETENTION || 86400 * 90 // Default 90 day retention for 1m and 15m data
export const INFLUX_INGRESS_RETENTION = Bun.env.UNICOVE_INFLUX_INGRESS_RETENTION || 86400 // Default 1 day retention for ingress data
export const INFLUX_ORG = Bun.env.UNICOVE_INFLUX_ORG || 'unicove'

if (!INFLUX_URL || !INFLUX_TOKEN || !INFLUX_ORG) {
    logger.error('InfluxDB connection details not found in environment, exiting')
    process.exit(1)
}

export const influxdb = new InfluxDB({url: INFLUX_URL, token: INFLUX_TOKEN})
export const influxorgs = new OrgsAPI(influxdb)
export const influxbuckets = new BucketsAPI(influxdb)
export const influxtasks = new TasksAPI(influxdb)

export async function initialize() {
    logger.info('Initializing InfluxDB connection...')

    // Ensure existance of the organization
    let organizations: Organizations
    try {
        organizations = await influxorgs.getOrgs({org: INFLUX_ORG})
        logger.info(`Organization ${INFLUX_ORG} found.`)
    } catch (e) {
        logger.info(`No organization named ${INFLUX_ORG} found, creating...`)
        await influxorgs.postOrgs({
            body: {
                name: INFLUX_ORG,
            },
        })
        organizations = await influxorgs.getOrgs({org: INFLUX_ORG})
    }

    if (!organizations || !organizations.orgs || !organizations.orgs.length) {
        logger.error(`Organization ${INFLUX_ORG} not found after creation, exiting`)
        process.exit(1)
    }

    const org = organizations.orgs[0]
    if (!org.id) {
        logger.error(`Organization ${INFLUX_ORG} has no ID, exiting`)
        process.exit(1)
    }
    await setupMarketprices(org.id)
    await setupREX(org.id)
    await setupDbSize(org.id)
}
