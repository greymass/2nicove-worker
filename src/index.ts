import {ToadScheduler, SimpleIntervalJob, Task, AsyncTask} from 'toad-scheduler'

import {logger} from './logger'
import {sync as syncMarketprice} from './tasks/marketprice/sync'
import {get as getMarkerprice} from './tasks/marketprice/get'
import {initialize} from './influx'

const scheduler = new ToadScheduler()

async function main() {
    logger.info('Initializing database')
    await initialize()

    logger.info('Starting task scheduler')
    const task = new AsyncTask(`syncing resource market`, () => syncMarketprice())
    const job = new SimpleIntervalJob({seconds: 15, runImmediately: true}, task)
    scheduler.addSimpleIntervalJob(job)

    const port = Bun.env.UNICOVE_HTTP_PORT || 3000
    logger.info('Starting HTTP service', {port})
    Bun.serve({
        port,
        async fetch(req) {
            const path = new URL(req.url).pathname
            if (path === '/') return new Response('📊')
            if (path === '/api/marketprice/cpu') {
                const data = await getMarkerprice('cpu')
                return Response.json(data)
            }
            if (path === '/api/marketprice/net') {
                const data = await getMarkerprice('net')
                return Response.json(data)
            }
            if (path === '/api/marketprice/ram') {
                const data = await getMarkerprice('ram')
                return Response.json(data)
            }
            return new Response('Page not found', {status: 404})
        },
    })
}

function ensureExit(code: number, timeout = 3000) {
    process.exitCode = code
    setTimeout(() => {
        scheduler.stop()
        process.exit(code)
    }, timeout)
}

process.once('uncaughtException', (error) => {
    console.error(error, 'Uncaught exception')
    ensureExit(1)
})

main()
