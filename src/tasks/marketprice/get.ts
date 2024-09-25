import {INFLUX_ORG, influxdb} from '../../influx'
import {InfluxData} from '../../influx/types'

export async function get(measurement: 'cpu' | 'net' | 'ram', bucket = '15m', range = '30d') {
    const marketprice = influxdb.getQueryApi(INFLUX_ORG)

    const query = `
    from(bucket: "marketprice-${bucket}")
    |> range(start: -${range})
    |> filter(fn: (r) => r._measurement == "${measurement}")
    `

    const result = await marketprice.collectRows<InfluxData>(query)
    return result.map((row: InfluxData) => ({
        date: row._time,
        value: row._value,
    }))
}
