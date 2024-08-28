import {INFLUX_ORG} from '..'

export function getTasks() {
    return [
        // 1m market prices
        `
        option task = {name: "marketprice-1m", every: 1m}
        
        data = from(bucket: "marketprice")
        |> range(start: -2m)
        
        data
        |> aggregateWindow(every: 1m, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1m", org: "${INFLUX_ORG}")
        `,

        // 15m market prices
        `
        option task = {name: "marketprice-15m", every: 15m}
        
        data = from(bucket: "marketprice-1m")
        |> range(start: -30m)
        
        data
        |> aggregateWindow(every: 15m, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-15m", org: "${INFLUX_ORG}")
        `,

        // 1h market prices
        `
        option task = {name: "marketprice-1h", every: 1h}
        
        data = from(bucket: "marketprice-15m")
        |> range(start: -2h)
        
        data
        |> aggregateWindow(every: 1h, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1h", org: "${INFLUX_ORG}")
        `,

        // 1d market prices
        `
        option task = {name: "marketprice-1d", every: 1d}
        
        data = from(bucket: "marketprice-1h")
        |> range(start: -2d)
        
        data
        |> aggregateWindow(every: 1d, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1d", org: "${INFLUX_ORG}")
        `,

        // 1mo market prices
        `
        option task = {name: "marketprice-1mo", every: 1mo}
        
        data = from(bucket: "marketprice-1h")
        |> range(start: -2mo)
        
        data
        |> aggregateWindow(every: 1mo, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1mo", org: "${INFLUX_ORG}")
        `,

        // 1y market prices
        `
        option task = {name: "marketprice-1y", every: 1y}
        
        data = from(bucket: "marketprice-1d")
        |> range(start: -2y)
        
        data
        |> aggregateWindow(every: 1y, fn: last, createEmpty: false)
        |> to(bucket: "marketprice-1y", org: "${INFLUX_ORG}")
        `,
    ]
}
