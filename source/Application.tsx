import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { Provider } from 'react-redux'
import { HashRouter as Router } from 'react-router-dom'
import { Routes } from './Routes'
import { store } from './store'
import { theme } from './theme'

export const Application: React.FC = () => (
    <Provider store={store}>
        <ChakraProvider theme={theme}>
            <Router>
                <Routes />
            </Router>
        </ChakraProvider>
    </Provider>
)
