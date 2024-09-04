import {Point} from '@influxdata/influxdb-client'

import {logger} from '../../logger'
import {INFLUX_ORG, influxdb} from '../../influx'
import {client} from '../../common'

export function sync() {
    const dbsize = influxdb.getWriteApi(INFLUX_ORG, 'dbsize', 'ms')

    client.v1.chain
        .get_info()
        .then((info) => {
            const timestamp = info.head_block_time.toDate()
            client.provider
                .call({
                    path: '/v1/db_size/get',
                })
                .then((response) => {
                    dbsize.writePoint(
                        new Point('dbsize')
                            .intField('dbsize', response.json.size)
                            .timestamp(timestamp)
                    )
                    dbsize.writePoint(
                        new Point('free_bytes')
                            .intField('free_bytes', response.json.free_bytes)
                            .timestamp(timestamp)
                    )

                    dbsize.writePoint(
                        new Point('used_bytes')
                            .intField('used_bytes', response.json.used_bytes)
                            .timestamp(timestamp)
                    )
                    for (const index of response.json.indices) {
                        dbsize.writePoint(
                            new Point(index.index)
                                .intField(index.index, index.row_count)
                                .timestamp(timestamp)
                        )
                    }
                    logger.info('dbsize data updated', {ts: timestamp})
                })
                .catch((e) => {
                    logger.error('error syncing dbsize', e)
                })
        })
        .catch((e) => {
            logger.error('get_info error in dbsize:', e)
        })
}
