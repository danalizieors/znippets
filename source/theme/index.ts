import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
    config: {
        initialColorMode: 'dark',
    },
    colors: {
        gray: {
            800: '#1e1e1e',
        },
    },
})
