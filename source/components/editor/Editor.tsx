import { Button } from '@chakra-ui/button'
import { Box } from '@chakra-ui/layout'
import { Select } from '@chakra-ui/select'
import Monaco, { Monaco as MonacoType } from '@monaco-editor/react'
import { map, values } from 'ramda'
import React from 'react'
import { useLanguageStore } from '../../stores/useLanguageStore'
import { useSnippetStore } from '../../stores/useSnippetStore'
import { encode } from '../../utilities/conversion'
import { processLanguages } from './languages'

export const Editor: React.FC = () => {
    const { language, code, set } = useSnippetStore()
    const { languages, setLanguages } = useLanguageStore()

    const beforeMount = (monaco: MonacoType) => {
        const monacoLanguages = monaco.languages.getLanguages()
        const processed = processLanguages(monacoLanguages)
        setLanguages(processed)
    }
    const onClick = () => {
        const encoded = encode({ language, code })
        const { origin, pathname } = window.location
        const link = `${origin}${pathname}#/s/${encoded}`
        window.navigator.clipboard.writeText(link)
    }

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        set({ language: event.target.value, code })
    }

    return (
        <Box position='fixed' height='full' width='full'>
            <Monaco
                height='90vh'
                language={language}
                defaultValue={code}
                theme='vs-dark'
                onChange={(value) => set({ language, code: value || '' })}
                beforeMount={beforeMount}
            ></Monaco>
            <Select value={language} onChange={onSelect}>
                {map(
                    (language) => (
                        <option key={language.id} value={language.id}>
                            {language.name}
                        </option>
                    ),
                    values(languages),
                )}
            </Select>
            <Button onClick={onClick}>copy to clipboard</Button>
        </Box>
    )
}
