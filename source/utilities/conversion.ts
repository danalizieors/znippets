import {
    deflateSync,
    inflateSync as decompress,
    strFromU8 as decodeUint8Array,
    strToU8 as encodeUint8Array,
} from 'fflate'
import { fromUint8Array, toUint8Array } from 'js-base64/base64'
import { pipe, replace } from 'ramda'

const removePadding = replace(/=/g, '')
const encodeUrlSafe = pipe(replace(/\+/g, '~'), replace(/\//g, '_'))
const decodeUrlSafe = pipe(replace(/~/g, '+'), replace(/_/g, '/'))

const { stringify, parse } = JSON
const compress = (data: Uint8Array) => deflateSync(data, { level: 9 })
const encodeBase64 = pipe(fromUint8Array, encodeUrlSafe, removePadding)
const decodeBase64 = pipe(decodeUrlSafe, toUint8Array)

export const encode = (value: {} | null) => {
    const string = stringify(value)
    const uint8Array = encodeUint8Array(string)
    const compressed = compress(uint8Array)
    const base64 = encodeBase64(compressed)

    return base64
}

export const decode = (base64: string) => {
    try {
        const compressed = decodeBase64(base64)
        const uint8Array = decompress(compressed)
        const string = decodeUint8Array(uint8Array)
        const value = parse(string)

        return value
    } catch {
        return undefined
    }
}
