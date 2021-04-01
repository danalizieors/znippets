import Monaco, { Monaco as MonacoType } from '@monaco-editor/react'
import React from 'react'
import { useLanguageStore } from '../../stores/useLanguageStore'
import { useSnippetStore } from '../../stores/useSnippetStore'
import { processLanguages } from './languages'

export const Editor: React.FC = () => {
    const { language, code, setCode } = useSnippetStore()
    const setLanguages = useLanguageStore((state) => state.set)

    const beforeMount = (monaco: MonacoType) => {
        const monacoLanguages = monaco.languages.getLanguages()
        const processed = processLanguages(monacoLanguages)
        setLanguages(processed)
    }

    const onChange = (value?: string) => setCode(value || '')

    return (
        <Monaco
            theme='vs-dark'
            language={language}
            defaultValue={code}
            beforeMount={beforeMount}
            onChange={onChange}
        ></Monaco>
    )
}
