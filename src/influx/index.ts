import {InfluxDB} from '@influxdata/influxdb-client'
import {OrgsAPI, BucketsAPI, TasksAPI, Organizations} from '@influxdata/influxdb-client-apis'

import {logger} from '../logger'
import {getTasks} from './tasks/marketprices'

const INFLUX_URL = Bun.env.UNICOVE_INFLUX_URL
const INFLUX_TOKEN = Bun.env.UNICOVE_INFLUX_TOKEN
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

    // Tasks that will utilize new buckets, defined by frequency
    const tasks = ['1m', '15m', '1h', '1d', '1mo', '1y']

    // Ensure existance of the ingress buckets
    const buckets = ['marketprice']
    for (const name of buckets) {
        const retentionRules = [{everySeconds: 86400}] // 1-day retention
        try {
            const bucket = await influxbuckets.getBuckets({org: INFLUX_ORG, name})
            logger.info(`Bucket "${name}" found`)
        } catch (error) {
            logger.info(`Bucket "${name}" not found, creating.`)
            influxbuckets.postBuckets({body: {orgID: org.id, name, retentionRules}})
        }
    }

    // Ensure existance of the downsampled buckets
    const variations = [...tasks.map((t) => `marketprice-${t}`)]
    for (const name of variations) {
        let retention = 0 // Infinite retention
        switch (name) {
            case 'marketprice-1m':
            case 'marketprice-15m': {
                retention = 86400 * 90 // 90 day retention
                break
            }
            default: {
                // Use default retention for 1d, 1m, 1y
                break
            }
        }
        const retentionRules = [{everySeconds: retention}]
        try {
            await influxbuckets.getBuckets({org: INFLUX_ORG, name})
            logger.info(`Bucket "${name}" found`)
        } catch (error) {
            logger.info(`Bucket "${name}" not found, creating.`)
            influxbuckets.postBuckets({body: {orgID: org.id, name, retentionRules}})
        }
    }

    // Setup processing tasks
    const tasksFound = await influxtasks.getTasks({org: INFLUX_ORG})
    if (tasksFound && tasksFound.tasks && tasksFound.tasks.length) {
        logger.info(`Tasks found`)
    } else {
        logger.info(`Tasks not found, creating`)
        for (const task of getTasks()) {
            influxtasks.postTasks({
                body: {
                    org: INFLUX_ORG,
                    flux: task,
                    status: 'active',
                },
            })
        }
    }
}
