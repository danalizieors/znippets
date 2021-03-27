import { decode, encode } from '../conversion'

const structure = {
    object: {
        field: 'value',
        nested: {
            nestedField: 'nestedValue',
        },
    },
    array: [1, 'test', ['test', 'array']],
    string: 'test string',
    number: 42,
    true: true,
    false: false,
    null: null,
}

const testConversionConsistency = (value: {} | null) => {
    const converted = decode(encode(value))
    expect(converted).toEqual(value)
}

describe('conversion', () => {
    test('encoded and decoded value is structurally equal to original', () => {
        testConversionConsistency({})
        testConversionConsistency({ test: 'object' })

        testConversionConsistency([])
        testConversionConsistency(['test', 'array'])

        testConversionConsistency('')
        testConversionConsistency('test string')
        testConversionConsistency('42')

        testConversionConsistency(0)
        testConversionConsistency(42)

        testConversionConsistency(true)
        testConversionConsistency(false)

        testConversionConsistency(null)

        testConversionConsistency(structure)
    })

    test('decode should gracefully handle errors', () => {
        expect(decode('')).toBeUndefined()
        expect(decode('not encoded properly')).toBeUndefined()
    })
})
