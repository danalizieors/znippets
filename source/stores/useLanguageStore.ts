import { indexBy, prop } from 'ramda'
import create from 'zustand'
import { combine } from 'zustand/middleware'

export type Language = {
    id: string
    name: string
    extensions: string[]
}

type State = {
    languages: Record<string, Language>
}

const state: State = {
    languages: {},
}

export const useLanguageStore = create(
    combine(state, (set) => ({
        set: (languages: Language[]) =>
            set({ languages: indexBy(prop('id'), languages) }),
    })),
)
