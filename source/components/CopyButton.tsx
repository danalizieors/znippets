import { Button } from '@chakra-ui/button'
import React, { useState } from 'react'
import { useSnippetStore } from '../stores/useSnippetStore'
import { encode } from '../utilities/conversion'

export const CopyButton: React.FC = () => {
    const { language, code } = useSnippetStore()
    const [copied, setCopied] = useState(false)

    const onClick = () => {
        const encoded = encode({ language, code })
        const { origin, pathname } = window.location
        const link = `${origin}${pathname}#/s/${encoded}`
        window.navigator.clipboard.writeText(link)

        setCopied(true)
    }

    const onBlur = () => {
        setCopied(false)
    }

    const text = copied ? 'Copied!' : 'Copy to clipboard!'

    return (
        <Button width='full' onClick={onClick} onBlur={onBlur}>
            {text}
        </Button>
    )
}
