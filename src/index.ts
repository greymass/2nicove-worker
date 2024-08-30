import {ToadScheduler, SimpleIntervalJob, Task, AsyncTask} from 'toad-scheduler'

import {logger} from './logger'
import {sync as syncMarketprice} from './tasks/marketprice/sync'
import {sync as syncStaked} from './tasks/rex/sync'
import {get as getMarkerprice} from './tasks/marketprice/get'
import {initialize} from './influx'

const scheduler = new ToadScheduler()

function startMarketprice() {
    const task = new Task(
        `syncing resource market`,
        () => syncMarketprice(),
        (e) => logger.error(e)
    )
    const job = new SimpleIntervalJob({seconds: 15, runImmediately: true}, task)
    scheduler.addSimpleIntervalJob(job)
}

function startREX() {
    const task = new Task(
        `syncing rex information`,
        () => syncStaked(),
        (e) => logger.error(e)
    )
    const job = new SimpleIntervalJob({seconds: 5, runImmediately: true}, task)
    scheduler.addSimpleIntervalJob(job)
}

async function main() {
    logger.info('Initializing database')
    await initialize()

    logger.info('Starting task scheduler')
    startMarketprice()
    startREX()

    const port = Bun.env.UNICOVE_HTTP_PORT || 3000
    logger.info('Starting HTTP service', {port})
    Bun.serve({
        port,
        async fetch(req) {
            const path = new URL(req.url).pathname
            let res: Response | undefined
            if (path === '/') res = new Response('📊')
            if (path === '/api/marketprice/cpu') {
                const data = await getMarkerprice('cpu')
                res = Response.json(data)
            }
            if (path === '/api/marketprice/net') {
                const data = await getMarkerprice('net')
                res = Response.json(data)
            }
            if (path === '/api/marketprice/ram') {
                const data = await getMarkerprice('ram')
                res = Response.json(data)
            }
            if (res) {
                res.headers.set('Access-Control-Allow-Origin', '*')
                res.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
                return res
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
