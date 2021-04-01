import { Button } from '@chakra-ui/button'
import React, { useEffect, useState } from 'react'
import { useSnippetStore } from '../stores/useSnippetStore'
import { encode } from '../utilities/conversion'

export const CopyButton: React.FC = () => {
    const { language, code } = useSnippetStore()
    const [copied, setCopied] = useState(false)

    useEffect(() => {
        setCopied(false)
    }, [language, code])

    const onClick = () => {
        const encoded = encode({ language, code })
        const { origin, pathname } = window.location
        const link = `${origin}${pathname}#/s/${encoded}`
        window.navigator.clipboard.writeText(link)

        setCopied(true)
    }

    const text = copied ? 'Copied!' : 'Copy to clipboard!'

    return (
        <Button width='full' onClick={onClick}>
            {' '}
            {text}
        </Button>
    )
}
