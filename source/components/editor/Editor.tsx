import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import Monaco from '@monaco-editor/react'
import React, { useState } from 'react'
import { useSnippetStore } from '../../stores/useSnippetStore'
import { encode } from '../../utilities/conversion'

export const Editor: React.FC = () => {
    const initialState = useSnippetStore((state) => state.code)
    const [state, setState] = useState(initialState)

    const onClick = () => {
        const encoded = encode({ language: 'plain text', code: state })
        const { origin, pathname } = window.location
        const link = `${origin}${pathname}#/s/${encoded}`
        window.navigator.clipboard.writeText(link)
    }

    return (
        <Box position='fixed' height='full' width='full'>
            <Monaco
                height='90vh'
                defaultLanguage='typescript'
                defaultValue={initialState}
                theme='vs-dark'
                onChange={(value) => setState(value || '')}
            ></Monaco>
            <Button onClick={onClick}>copy to clipboard</Button>
        </Box>
    )
}
