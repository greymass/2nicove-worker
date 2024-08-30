import {Asset, Serializer} from '@wharfkit/antelope'
import {Resources} from '@wharfkit/resources'
import {Point} from '@influxdata/influxdb-client'

import {logger} from '../../logger'
import {INFLUX_ORG, influxdb} from '../../influx'
import {delphiContract} from '../../common'

const resources = new Resources({
    url: Bun.env.UNICOVE_API,
    sampleAccount: 'eosio.reserv',
})

const marketprice = influxdb.getWriteApi(INFLUX_ORG, 'marketprice', 's')

export function sync() {
    syncResourceMarkets()
    syncTokenMarkets()
    logger.info('markerprice data updated')
}

async function syncTokenMarkets() {
    const pairs = ['eosusd', 'btccny', 'btcusd', 'eosbtc']
    for (const pair of pairs) {
        const datapoint = await delphiContract.table('datapoints', pair).get()
        if (datapoint) {
            logger.debug(`${pair} price: ${datapoint.median} from ${datapoint.timestamp}`)
            marketprice.writePoint(new Point(pair).intField('value', datapoint.median))
        }
    }
}

function syncResourceMarkets() {
    resources.v1.ram.get_state().then((ramstate) => {
        logger.debug('RAM state', Serializer.objectify(ramstate))

        const ram = ramstate.price_per_kb(1)
        logger.debug(`Current RAM price: ${ram}`)

        marketprice.writePoint(new Point('ram').intField('value', ram.units))
    })

    resources.getSampledUsage().then((sample) =>
        resources.v1.powerup.get_state().then((powerupstate) => {
            logger.debug('PowerUp state', Serializer.objectify(powerupstate))

            const cpu = Asset.from(
                powerupstate.cpu.price_per_ms(sample, 1),
                powerupstate.min_powerup_fee.symbol
            )
            logger.debug(`Current CPU price: ${cpu}`)

            marketprice.writePoint(new Point('cpu').floatField('value', cpu.units))

            const net = Asset.from(
                powerupstate.net.price_per_kb(sample, 1),
                powerupstate.min_powerup_fee.symbol
            )
            logger.debug(`Current NET price: ${net}`)

            marketprice.writePoint(new Point('net').floatField('value', net.units))
        })
    )
}
