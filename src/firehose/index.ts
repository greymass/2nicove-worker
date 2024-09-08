import {Point} from '@influxdata/influxdb-client'
import {ChannelCredentials, createChannel, createClient} from 'nice-grpc'

import {influxdb, INFLUX_ORG} from '../influx'
import {Block} from '../compiled_proto/antelope'
import {Response, StreamClient, StreamDefinition} from '../compiled_proto/firehose'

let lastCompletedBlock = 1

const cpu = influxdb.getWriteApi(INFLUX_ORG, 'cpu', 'ms')

class Counter extends Map {
    constructor() {
        super()
    }
    increment(key: string) {
        this.has(key) && this.set(key, this.get(key) + 1)
    }

    decrement(key: string) {
        this.has(key) && this.set(key, this.get(key) - 1)
    }
}

function process(response: Response) {
    if (!response.block) {
        throw new Error('no block')
    }
    const block = Block.decode(response.block.value)
    if (block) {
        if (!block.header || !block.header.timestamp) {
            throw new Error('no header')
        }
        const blocksBehind = ((new Date().getTime() - block.header.timestamp.getTime()) / 1000) * 2
        console.log('<<<< block', block.number, block.header?.timestamp, Math.floor(blocksBehind))
        // console.log(response.timestamp)
        console.log(
            block.unfilteredExecutedInputActionCount,
            'unfilteredExecutedInputActionCount (actions)'
        )
        console.log(block.unfilteredExecutedTotalActionCount, 'unfilteredExecutedTotalActionCount')
        console.log(block.unfilteredTransactionCount, 'unfilteredTransactionCount (transactions)')
        console.log(
            block.unfilteredImplicitTransactionOps.length,
            'unfilteredImplicitTransactionOps'
        )
        console.log(
            block.unfilteredTransactionTraceCount,
            'unfilteredTransactionTraceCount (traces)'
        )
        console.log(block.unfilteredTransactionTraces.length, 'unfilteredTransactionTraces')
        console.log(block.unfilteredTransactions.length, 'unfilteredTransactions.length')

        console.log(block.unfilteredTransactionCount, 'trxs in block')
        cpu.writePoint(
            new Point('transactions')
                .intField('count', block.unfilteredTransactionCount)
                .timestamp(block.header?.timestamp)
        )

        console.log(block.unfilteredTransactionTraceCount, 'traces in block')
        cpu.writePoint(
            new Point('traces')
                .intField('count', block.unfilteredTransactionTraceCount)
                .timestamp(block.header?.timestamp)
        )

        console.log(block.unfilteredExecutedInputActionCount, 'actions in block')
        cpu.writePoint(
            new Point('actions')
                .intField('count', block.unfilteredExecutedInputActionCount)
                .timestamp(block.header?.timestamp)
        )

        const contractUsagePerBlock = new Counter()
        const contractActionsPerBlock = new Counter()
        for (const trx of block.unfilteredTransactionTraces) {
            // console.log('    ---- transaction')
            // console.log('   ', trx.id)
            // console.log('    cpu     ', trx.receipt?.cpuUsageMicroSeconds)
            // console.log('    elapsed ', trx.elapsed)
            // console.log('    net     ', trx.receipt?.netUsageWords)
            const telapsed = trx.actionTraces
                .filter((trace) => trace.receiver === trace.action?.account)
                .reduce((acc, trace) => acc + trace.elapsed, 0)
            for (const trace of trx.actionTraces) {
                const pelapsed = trace.elapsed / telapsed
                const estcpu = Math.floor(pelapsed * (trx.receipt?.cpuUsageMicroSeconds || 0))
                // console.log('    ---- trace')
                // console.log('        elapsed ', trace.elapsed)
                // console.log('        telapsed', telapsed)
                // console.log('        pelapsed', pelapsed)
                if (trace.receiver === trace.action?.account) {
                    const contract = `${trace.action?.account}`
                    const action = `${contract}:${trace.action?.name}`
                    if (!contractUsagePerBlock.has(contract)) {
                        contractUsagePerBlock.set(contract, 0)
                    }
                    contractUsagePerBlock.increment(contract)

                    if (!contractActionsPerBlock.has(action)) {
                        contractActionsPerBlock.set(action, 0)
                    }
                    contractActionsPerBlock.increment(action)

                    // const cpu = trace.elapsed
                    const receiver = `${trace.receipt?.receiver}`
                    // const event = `${trace.action?.account}:${trace.action?.name}`
                    // console.log('        ----', trace.actionOrdinal)
                    // console.log('        receiver', receiver)
                    // console.log('        contract', contract)
                    // console.log('        action  ', action)
                    // const authorization = `${trace.action?.authorization?.map((a) => a.actor).join(', ')}`
                    // console.log('        actors  ', authorization)
                    // console.log('        estcpu  ', estcpu)
                    // cpu.writePoint(
                    //     new Point('cpu')
                    //         .intField('cpu', estcpu)
                    //         .tag('contract', trace.action?.account)
                    //         .tag('action', trace.action?.name)
                    //         .timestamp(trx.blockTime)
                    // )
                } else {
                    // console.log('        noficiation')
                }
                // console.log(trace)

                // console.log(trace.action?.account, trace.action?.name, trace.action?.authorization, trace.action?.jsonData)
            }
        }
        //
        // console.log(contractUsagePerBlock)

        for (const [contract, usage] of Array.from(contractUsagePerBlock)) {
            // console.log(block.header?.timestamp, contract, usage)
            cpu.writePoint(
                new Point('contract')
                    .intField('usage', usage)
                    .tag('contract', contract)
                    .timestamp(block.header?.timestamp)
            )
        }
        // console.log(contractActionsPerBlock)
        for (const [action, usage] of Array.from(contractActionsPerBlock)) {
            // console.log(block.header?.timestamp, action, usage)
            cpu.writePoint(
                new Point('action')
                    .intField('usage', usage)
                    .tag('action', action)
                    .timestamp(block.header?.timestamp)
            )
            if (usage > block.unfilteredExecutedInputActionCount) {
                // console.log(block)
                // console.log('!!!!!!!!!!!!!!!', usage, block.unfilteredExecutedInputActionCount)
                // console.log(response.number)
                // console.log(response.timestamp)
                // console.log(
                //     block.unfilteredExecutedInputActionCount,
                //     'unfilteredExecutedInputActionCount (actions)'
                // )
                // console.log(
                //     block.unfilteredExecutedTotalActionCount,
                //     'unfilteredExecutedTotalActionCount'
                // )
                // console.log(
                //     block.unfilteredTransactionCount,
                //     'unfilteredTransactionCount (transactions)'
                // )
                // console.log(
                //     block.unfilteredImplicitTransactionOps.length,
                //     'unfilteredImplicitTransactionOps'
                // )
                // console.log(
                //     block.unfilteredTransactionTraceCount,
                //     'unfilteredTransactionTraceCount (traces)'
                // )
                // console.log(block.unfilteredTransactionTraces.length, 'unfilteredTransactionTraces')
                // console.log(block.unfilteredTransactions.length, 'unfilteredTransactions.length')
                // console.log(block.unfilteredTransactionTraces)
            }
        }

        // console.log(contractActionsPerBlock)
        // console.log(contractUsagePerBlock)
        console.log('>>>> block', block.number, block.header?.timestamp)
        lastCompletedBlock = block.number
    }
}

export async function doWork() {
    if (!Bun.env.UNICOVE_FIREHOSE_URL) {
        throw new Error('UNICOVE_FIREHOSE_URL not set')
    }
    const channel = createChannel(
        Bun.env.UNICOVE_FIREHOSE_URL,
        ChannelCredentials.createInsecure(),
        {
            'grpc.max_receive_message_length': -1,
        }
    )
    const client: StreamClient = createClient(StreamDefinition, channel)
    try {
        const options = {
            startBlockNum: lastCompletedBlock + 1,
            // finalBlocksOnly: true,
        }
        console.log('doWork', options)
        for await (const response of client.blocks(options)) {
            process(response)
        }
    } catch (e: unknown) {
        console.log('error', e)
        channel.close()
        await doWork()
    }
}
