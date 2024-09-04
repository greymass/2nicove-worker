import {Point} from '@influxdata/influxdb-client'

import {logger} from '../../logger'
import {INFLUX_ORG, influxdb} from '../../influx'
import {client, systemContract} from '../../common'

export function sync() {
    const rex = influxdb.getWriteApi(INFLUX_ORG, 'rex', 'ms')

    client.v1.chain
        .get_info()
        .then((info) => {
            const timestamp = info.head_block_time.toDate()
            systemContract
                .table('rexpool')
                .get()
                .then((state) => {
                    if (state) {
                        logger.debug(`total_lent: ${state.total_lent}`)
                        logger.debug(`total_unlent: ${state.total_unlent}`)
                        logger.debug(`total_rent: ${state.total_rent}`)
                        logger.debug(`total_lendable: ${state.total_lendable}`)
                        logger.debug(`total_rex: ${state.total_rex}`)
                        logger.debug(`namebid_proceeds: ${state.namebid_proceeds}`)
                        logger.debug(`loan_num: ${state.loan_num}`)

                        rex.writePoint(
                            new Point('total_lent')
                                .intField('total_lent', state.total_lent.units)
                                .timestamp(timestamp)
                        )
                        rex.writePoint(
                            new Point('total_unlent')
                                .intField('total_unlent', state.total_unlent.units)
                                .timestamp(timestamp)
                        )
                        rex.writePoint(
                            new Point('total_rent')
                                .intField('total_rent', state.total_rent.units)
                                .timestamp(timestamp)
                        )
                        rex.writePoint(
                            new Point('total_lendable')
                                .intField('total_lendable', state.total_lendable.units)
                                .timestamp(timestamp)
                        )
                        rex.writePoint(
                            new Point('total_rex')
                                .intField('total_rex', state.total_rex.units)
                                .timestamp(timestamp)
                        )
                        rex.writePoint(
                            new Point('namebid_proceeds')
                                .intField('namebid_proceeds', state.namebid_proceeds.units)
                                .timestamp(timestamp)
                        )
                        rex.writePoint(
                            new Point('loan_num')
                                .intField('loan_num', state.loan_num)
                                .timestamp(timestamp)
                        )
                        logger.info('rex data updated')
                    }
                })
                .catch((e) => {
                    logger.error('error syncing rex', e)
                })
        })
        .catch((e) => {
            logger.error('get_info error in rex:', e)
        })
}
