import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import React, { useEffect, useState } from 'react'
import { ReactCodeJar } from 'react-codejar'
import { useSelector } from 'react-redux'
import { encode } from '../utilities/conversion'

export const Editor: React.FC = () => {
    const initialState = useSelector((state: any) => state.snippet.code)
    const [state, setState] = useState(initialState)

    useEffect(() => {
        setState(initialState)
    }, [initialState])

    const onClick = () => {
        const encoded = encode({ language: 'plain text', code: state })
        const link = `${window.location.origin}/#/s/${encoded}`
        window.navigator.clipboard.writeText(link)
    }

    return (
        <Box position='fixed' height='full' width='full'>
            <ReactCodeJar
                code={state}
                onUpdate={setState}
                highlight={(state) => state}
                style={{}}
            >
                {state}
            </ReactCodeJar>
            <Button onClick={onClick}>copy to clipboard</Button>
        </Box>
    )
}
