import {APIClient} from '@wharfkit/antelope'
import {Contract as SystemContract} from './contracts/system'
import {Contract as DelphiContract} from './contracts/delphioracle'

export const client = new APIClient({
    url: Bun.env.UNICOVE_API,
})

export const systemContract = new SystemContract({
    client,
})

export const delphiContract = new DelphiContract({
    client,
})
