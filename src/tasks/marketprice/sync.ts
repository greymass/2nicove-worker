import {Asset, Serializer} from '@wharfkit/antelope'
import {Resources} from '@wharfkit/resources'
import {Point} from '@influxdata/influxdb-client'

import {logger} from '../../logger'
import {INFLUX_ORG, influxdb} from '../../influx'
import {client, delphiContract} from '../../common'

const resources = new Resources({
    url: Bun.env.UNICOVE_API,
    sampleAccount: 'eosio.reserv',
})

const marketprice = influxdb.getWriteApi(INFLUX_ORG, 'marketprice', 'ms')

export function sync() {
    syncResourceMarkets()
    syncTokenMarkets()
}

async function syncTokenMarkets() {
    const pairs = ['eosusd', 'btccny', 'btcusd', 'eosbtc']
    for (const pair of pairs) {
        const datapoint = await delphiContract
            .table('datapoints', pair)
            .get()
            .catch((e) => {
                logger.error('error syncing datapoints:', e)
            })
        if (datapoint) {
            logger.debug(`${pair} price: ${datapoint.median} from ${datapoint.timestamp}`)
            marketprice.writePoint(
                new Point(pair)
                    .intField('value', datapoint.median)
                    .timestamp(datapoint.timestamp.toDate())
            )
            logger.info('tokenmarket data updated', {ts: datapoint.timestamp.toDate()})
        }
    }
}

function syncResourceMarkets() {
    client.v1.chain
        .get_info()
        .then((info) => {
            const timestamp = info.head_block_time.toDate()

            resources.v1.ram
                .get_state()
                .then((ramstate) => {
                    logger.debug('RAM state', Serializer.objectify(ramstate))

                    const ram = ramstate.price_per_kb(1)
                    logger.debug(`Current RAM price: ${ram}`)

                    marketprice.writePoint(
                        new Point('ram').intField('value', ram.units).timestamp(timestamp)
                    )
                })
                .catch((e) => {
                    logger.error('error syncing ram:', e)
                })

            resources
                .getSampledUsage()
                .then((sample) =>
                    resources.v1.powerup
                        .get_state()
                        .then((powerupstate) => {
                            logger.debug('PowerUp state', Serializer.objectify(powerupstate))

                            const cpu = Asset.from(
                                powerupstate.cpu.price_per_ms(sample, 1),
                                powerupstate.min_powerup_fee.symbol
                            )
                            logger.debug(`Current CPU price: ${cpu}`)

                            marketprice.writePoint(
                                new Point('cpu').floatField('value', cpu.units).timestamp(timestamp)
                            )

                            const net = Asset.from(
                                powerupstate.net.price_per_kb(sample, 1),
                                powerupstate.min_powerup_fee.symbol
                            )
                            logger.debug(`Current NET price: ${net}`)

                            marketprice.writePoint(
                                new Point('net').floatField('value', net.units).timestamp(timestamp)
                            )
                        })
                        .catch((e) => {
                            logger.error('error syncing powerup state:', e)
                        })
                )
                .catch((e) => {
                    logger.error('error syncing sample usage:', e)
                })

            logger.info('resource market data updated', {ts: timestamp})
        })
        .catch((e) => {
            logger.error('get_info error in marketprice:', e)
        })
}
