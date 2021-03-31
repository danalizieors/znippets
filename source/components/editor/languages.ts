import { Monaco } from '@monaco-editor/react'
import { map } from 'ramda'
import { Language } from '../../stores/useLanguageStore'

type MonacoLanguage = ReturnType<Monaco['languages']['getLanguages']>[number]

const customNames: Record<string, string> = {
    abap: 'ABAP',
    clojure: 'Clojure',
    julia: 'Julia',
    powerquery: 'Power Query',
    redis: 'Redis',
    scheme: 'Scheme',
    sol: 'Solidity',
    aes: 'Sophia',
    systemverilog: 'SystemVerilog',
    verilog: 'Verilog',
    tcl: 'Tcl',
}

const getName = (id: string, aliases: string[]) =>
    customNames[id] || aliases[0] || id

const processLanguage: (language: MonacoLanguage) => Language = ({
    id,
    aliases,
    extensions,
}) => ({
    id,
    name: getName(id, aliases || []),
    extensions: extensions || [],
})

export const processLanguages: (
    languages: MonacoLanguage[],
) => Language[] = map(processLanguage)
