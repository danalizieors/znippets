import {
    deflateSync,
    inflateSync as decompress,
    strFromU8 as decodeUint8Array,
    strToU8 as encodeUint8Array,
} from 'fflate'
import { fromUint8Array, toUint8Array } from 'js-base64/base64'
import { always, pipe, replace, tryCatch } from 'ramda'

const removePadding = replace(/=/g, '')
const encodeUrlSafe = pipe(replace(/\+/g, '~'), replace(/\//g, '_'))
const decodeUrlSafe = pipe(replace(/~/g, '+'), replace(/_/g, '/'))

const { stringify, parse } = JSON
const compress = (data: Uint8Array) => deflateSync(data, { level: 9 })
const encodeBase64 = pipe(fromUint8Array, encodeUrlSafe, removePadding)
const decodeBase64 = pipe(decodeUrlSafe, toUint8Array)

export const encode: (value: {} | null) => string = pipe(
    stringify,
    encodeUint8Array,
    compress,
    encodeBase64,
)

export const decode: (base64: string) => any = tryCatch(
    pipe(decodeBase64, decompress, decodeUint8Array, parse),
    always(undefined),
)
