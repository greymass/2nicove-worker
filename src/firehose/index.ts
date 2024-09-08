import {Point} from '@influxdata/influxdb-client'

import {influxdb, INFLUX_ORG} from '../influx'
import {sf as firehose} from '../compiled_proto/src/proto/firehose'
import {sf as antelope} from '../compiled_proto/src/proto/antelope'
import {ChannelCredentials} from '@grpc/grpc-js'

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

function process(response: firehose.firehose.v2.Response) {
    if (!response.block) {
        throw new Error('no block')
    }
    const block = antelope.antelope.type.v1.Block.deserialize(response.block.value)
    if (block) {
        if (!block.header || !block.header.timestamp) {
            throw new Error('no header')
        }
        const timestamp = new Date(0)
        timestamp.setSeconds(block.header.timestamp.seconds)
        timestamp.setMilliseconds(block.header.timestamp.nanos / 1000000)
        const blocksBehind = ((new Date().getTime() - timestamp.getTime()) / 1000) * 2
        console.log('<<<< block', block.number, timestamp, Math.floor(blocksBehind))
        // console.log(response.timestamp)
        // console.log(
        //     block.unfiltered_executed_input_action_count,
        //     'unfiltered_executed_input_action_count (actions)'
        // )
        // console.log(
        //     block.unfiltered_executed_total_action_count,
        //     'unfilteredExecutedTotalActionCount'
        // )
        // console.log(block.unfiltered_transaction_count, 'unfilteredTransactionCount (transactions)')
        // console.log(
        //     block.unfiltered_implicit_transaction_ops.length,
        //     'unfilteredImplicitTransactionOps'
        // )
        // console.log(
        //     block.unfiltered_transaction_trace_count,
        //     'unfiltered_transaction_trace_count (traces)'
        // )
        // console.log(block.unfiltered_transaction_traces.length, 'unfiltered_transaction_traces')
        // console.log(block.unfiltered_transactions.length, 'unfilteredTransactions.length')

        console.log(block.unfiltered_transaction_count, 'trxs in block')
        cpu.writePoint(
            new Point('transactions')
                .intField('count', block.unfiltered_transaction_count)
                .timestamp(timestamp)
        )

        console.log(block.unfiltered_transaction_trace_count, 'traces in block')
        cpu.writePoint(
            new Point('traces')
                .intField('count', block.unfiltered_transaction_trace_count)
                .timestamp(timestamp)
        )

        console.log(block.unfiltered_executed_input_action_count, 'actions in block')
        cpu.writePoint(
            new Point('actions')
                .intField('count', block.unfiltered_executed_input_action_count)
                .timestamp(timestamp)
        )

        const contractUsagePerBlock = new Counter()
        const contractActionsPerBlock = new Counter()
        for (const trx of block.unfiltered_transaction_traces) {
            // console.log('    ---- transaction')
            // console.log('   ', trx.id)
            // console.log('    cpu     ', trx.receipt?.cpu_usage_micro_seconds)
            // console.log('    elapsed ', trx.elapsed)
            // console.log('    net     ', trx.receipt?.netUsageWords)
            const telapsed = trx.action_traces
                .filter((trace) => trace.receiver === trace.action?.account)
                .reduce((acc, trace) => acc + trace.elapsed, 0)
            for (const trace of trx.action_traces) {
                const pelapsed = trace.elapsed / telapsed
                const estcpu = Math.floor(pelapsed * (trx.receipt?.cpu_usage_micro_seconds || 0))
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
            // console.log(timestamp, contract, usage)
            cpu.writePoint(
                new Point('contract')
                    .intField('usage', usage)
                    .tag('contract', contract)
                    .timestamp(timestamp)
            )
        }
        // console.log(contractActionsPerBlock)
        for (const [action, usage] of Array.from(contractActionsPerBlock)) {
            // console.log(timestamp, action, usage)
            cpu.writePoint(
                new Point('action')
                    .intField('usage', usage)
                    .tag('action', action)
                    .timestamp(timestamp)
            )
            if (usage > block.unfiltered_executed_input_action_count) {
                // console.log(block)
                // console.log('!!!!!!!!!!!!!!!', usage, block.unfiltered_executed_input_action_count)
                // console.log(response.number)
                // console.log(response.timestamp)
                // console.log(
                //     block.unfiltered_executed_input_action_count,
                //     'unfiltered_executed_input_action_count (actions)'
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
                //     block.unfiltered_transaction_trace_count,
                //     'unfiltered_transaction_trace_count (traces)'
                // )
                // console.log(block.unfiltered_transaction_traces.length, 'unfiltered_transaction_traces')
                // console.log(block.unfilteredTransactions.length, 'unfilteredTransactions.length')
                // console.log(block.unfiltered_transaction_traces)
            }
        }

        // console.log(contractActionsPerBlock)
        // console.log(contractUsagePerBlock)
        console.log('>>>> block', block.number, timestamp)
        lastCompletedBlock = block.number
    }
}

export async function doWork() {
    if (!Bun.env.UNICOVE_FIREHOSE_URL) {
        throw new Error('UNICOVE_FIREHOSE_URL not set')
    }
    const client = new firehose.firehose.v2.StreamClient(
        Bun.env.UNICOVE_FIREHOSE_URL,
        ChannelCredentials.createSsl(),
        {
            'grpc.max_receive_message_length': -1,
        }
    )
    const request = new firehose.firehose.v2.Request({
        start_block_num: lastCompletedBlock + 1,
    })

    // const channel = createChannel(
    //     Bun.env.UNICOVE_FIREHOSE_URL,
    //     ChannelCredentials.createInsecure(),
    //     {
    //         'grpc.max_receive_message_length': -1,
    //     }
    // )
    // const client: StreamClient = createClient(StreamDefinition, channel)
    try {
        // console.log('doWork', options)
        for await (const response of client.Blocks(request)) {
            // console.log('response', response)
            process(response)
        }
    } catch (e: unknown) {
        console.log('error', e)
        // channel.close()
        await doWork()
    }
}
