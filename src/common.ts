import {APIClient} from '@wharfkit/antelope'
import {Contract as SystemContract} from './contracts/system'

export const client = new APIClient({
    url: Bun.env.UNICOVE_API,
})

export const systemContract = new SystemContract({
    client,
})
