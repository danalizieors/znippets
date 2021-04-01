import create from 'zustand'
import { combine } from 'zustand/middleware'

const state = {
    language: 'typescript',
    code: '',
}

export type Snippet = typeof state

export const useSnippetStore = create(
    combine(state, (set) => ({
        set: (snippet: Snippet) => set(snippet),
        setLanguage: (language: string) => set({ language }),
        setCode: (code: string) => set({ code }),
        reset: () => set(state),
    })),
)
