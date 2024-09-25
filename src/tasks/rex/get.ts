import {INFLUX_ORG, influxdb} from '../../influx'
import {InfluxData} from '../../influx/types'

export async function get(
    measurement:
        | 'total_lent'
        | 'total_unlent'
        | 'total_rent'
        | 'total_lendable'
        | 'total_rex'
        | 'namebid_proceeds'
        | 'loan_num',
    bucket = '15m',
    range = '30d'
) {
    const unicoveOrg = influxdb.getQueryApi(INFLUX_ORG)

    const query = `
    from(bucket: "rex-${bucket}")
    |> range(start: -${range})
    |> filter(fn: (r) => r._measurement == "${measurement}")
    `

    const result = await unicoveOrg.collectRows<InfluxData>(query)
    return result.map((row: InfluxData) => ({
        date: row._time,
        value: row._value,
    }))
}
