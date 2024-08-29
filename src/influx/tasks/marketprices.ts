import {INFLUX_ORG, influxbuckets, influxtasks} from '..'
import {logger} from '../../logger'

export async function setup(orgID: string) {
    await setupIngress(orgID)
    await setupDownsampleBuckets(orgID)
    await setupTasks(orgID)
}

async function setupDownsampleBuckets(orgID: string) {
    // Tasks that will utilize new buckets, defined by frequency
    const tasks = ['1m', '15m', '1h', '1d', '1mo', '1y']

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
            await influxbuckets.getBuckets({orgID, name})
            logger.debug(`Bucket "${name}" found`)
        } catch (error) {
            logger.info(`Bucket "${name}" not found, creating.`)
            influxbuckets.postBuckets({body: {orgID, name, retentionRules}})
        }
    }
}

async function setupTasks(orgID: string) {
    // Setup processing tasks
    const tasksFound = await influxtasks.getTasks({orgID, name: 'marketprice-1m'})
    if (tasksFound && tasksFound.tasks && tasksFound.tasks.length) {
        logger.debug(`Tasks found`)
    } else {
        logger.info(`Tasks not found, creating`)
        for (const task of getTasks()) {
            influxtasks.postTasks({
                body: {
                    orgID,
                    flux: task,
                    status: 'active',
                },
            })
        }
    }
}

export async function setupIngress(orgID: string) {
    // Ensure existance of the ingress buckets
    const buckets = ['marketprice']
    for (const name of buckets) {
        const retentionRules = [{everySeconds: 86400}] // 1-day retention
        try {
            await influxbuckets.getBuckets({orgID, name})
            logger.debug(`Bucket "${name}" found`)
        } catch (error) {
            logger.info(`Bucket "${name}" not found, creating.`)
            influxbuckets.postBuckets({body: {orgID, name, retentionRules}})
        }
    }
}

export function getTasks() {
    return [
        // 1m market prices
        `
        option task = {name: "marketprice-1m", every: 1m}
        
        data = from(bucket: "marketprice")
        |> range(start: -2m)
        
        data
        |> aggregateWindow(every: 1m, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1m", org: "${INFLUX_ORG}")
        `,

        // 15m market prices
        `
        option task = {name: "marketprice-15m", every: 15m}
        
        data = from(bucket: "marketprice-1m")
        |> range(start: -30m)
        
        data
        |> aggregateWindow(every: 15m, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-15m", org: "${INFLUX_ORG}")
        `,

        // 1h market prices
        `
        option task = {name: "marketprice-1h", every: 1h}
        
        data = from(bucket: "marketprice-15m")
        |> range(start: -2h)
        
        data
        |> aggregateWindow(every: 1h, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1h", org: "${INFLUX_ORG}")
        `,

        // 1d market prices
        `
        option task = {name: "marketprice-1d", every: 1d}
        
        data = from(bucket: "marketprice-1h")
        |> range(start: -2d)
        
        data
        |> aggregateWindow(every: 1d, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1d", org: "${INFLUX_ORG}")
        `,

        // 1mo market prices
        `
        option task = {name: "marketprice-1mo", every: 1mo}
        
        data = from(bucket: "marketprice-1h")
        |> range(start: -2mo)
        
        data
        |> aggregateWindow(every: 1mo, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1mo", org: "${INFLUX_ORG}")
        `,

        // 1y market prices
        `
        option task = {name: "marketprice-1y", every: 1y}
        
        data = from(bucket: "marketprice-1d")
        |> range(start: -2y)
        
        data
        |> aggregateWindow(every: 1y, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1y", org: "${INFLUX_ORG}")
        `,
    ]
}
