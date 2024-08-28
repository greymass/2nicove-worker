import {Asset, Serializer} from '@wharfkit/antelope'
import {Resources} from '@wharfkit/resources'
import {Point} from '@influxdata/influxdb-client'

import {logger} from '../../logger'
import {INFLUX_ORG, influxdb} from '../../influx'

const resources = new Resources({
    url: Bun.env.UNICOVE_API,
    sampleAccount: 'eosio.reserv',
})

export async function sync() {
    const marketprice = influxdb.getWriteApi(INFLUX_ORG, 'marketprice', 's')

    logger.info('Updating resource markets...')
    const sample = await resources.getSampledUsage()

    const ramstate = await resources.v1.ram.get_state()
    logger.debug('RAM state', Serializer.objectify(ramstate))

    const ram = ramstate.price_per_kb(1)
    logger.info(`Current RAM price: ${ram}`)

    marketprice.writePoint(new Point('ram').intField('value', ram.units))

    const powerupstate = await resources.v1.powerup.get_state()
    logger.debug('PowerUp state', Serializer.objectify(powerupstate))

    const cpu = Asset.from(powerupstate.cpu.price_per_ms(sample, 1), ram.symbol)
    logger.info(`Current CPU price: ${cpu}`)

    marketprice.writePoint(new Point('cpu').floatField('value', cpu.units))

    const net = Asset.from(powerupstate.net.price_per_kb(sample, 1), ram.symbol)
    logger.info(`Current NET price: ${net}`)

    marketprice.writePoint(new Point('net').floatField('value', net.units))
}
