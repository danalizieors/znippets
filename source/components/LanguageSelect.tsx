import { Select } from '@chakra-ui/select'
import { map, values } from 'ramda'
import React from 'react'
import { useLanguageStore } from '../stores/useLanguageStore'
import { useSnippetStore } from '../stores/useSnippetStore'

export const LanguageSelect: React.FC = () => {
    const languages = useLanguageStore((state) => state.languages)
    const language = useSnippetStore((state) => state.language)
    const setLanguage = useSnippetStore((state) => state.setLanguage)

    const onSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setLanguage(event.target.value)
    }

    const options = map(
        (language) => (
            <option key={language.id} value={language.id}>
                {language.name}
            </option>
        ),
        values(languages),
    )

    return (
        <Select value={language} onChange={onSelect}>
            {options}
        </Select>
    )
}
