import {Point} from '@influxdata/influxdb-client'

import {logger} from '../../logger'
import {INFLUX_ORG, influxdb} from '../../influx'
import {systemContract} from '../../common'

export async function sync() {
    const rex = influxdb.getWriteApi(INFLUX_ORG, 'rex', 's')
    const state = await systemContract.table('rexpool').get()
    if (state) {
        logger.debug(`total_lent: ${state.total_lent}`)
        logger.debug(`total_unlent: ${state.total_unlent}`)
        logger.debug(`total_rent: ${state.total_rent}`)
        logger.debug(`total_lendable: ${state.total_lendable}`)
        logger.debug(`total_rex: ${state.total_rex}`)
        logger.debug(`namebid_proceeds: ${state.namebid_proceeds}`)
        logger.debug(`loan_num: ${state.loan_num}`)

        rex.writePoint(new Point('total_lent').intField('total_lent', state.total_lent.units))
        rex.writePoint(new Point('total_unlent').intField('total_unlent', state.total_unlent.units))
        rex.writePoint(new Point('total_rent').intField('total_rent', state.total_rent.units))
        rex.writePoint(
            new Point('total_lendable').intField('total_lendable', state.total_lendable.units)
        )
        rex.writePoint(new Point('total_rex').intField('total_rex', state.total_rex.units))
        rex.writePoint(
            new Point('namebid_proceeds').intField('namebid_proceeds', state.namebid_proceeds.units)
        )
        rex.writePoint(new Point('loan_num').intField('loan_num', state.loan_num))
        logger.info('rex data updated')
    }
}
