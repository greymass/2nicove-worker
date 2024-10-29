import {logger} from '../../logger'
import {INFLUX_ORG, influxdb} from '../../influx'
import {Marketprice} from './types'

export async function get(measurement: 'cpu' | 'net' | 'ram', bucket = '1h', range = '30d') {
    const marketprice = influxdb.getQueryApi(INFLUX_ORG)

    const query = `
    from(bucket: "marketprice-${bucket}")
    |> range(start: -${range})
    |> filter(fn: (r) => r._measurement == "${measurement}")
    `

    const result = await marketprice.collectRows<Marketprice>(query)
    return result.map((row) => ({
        date: row._time,
        value: row._value,
    }))
}
