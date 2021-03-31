import { indexBy, prop } from 'ramda'
import create from 'zustand'

export type Language = {
    id: string
    name: string
    extensions: string[]
}

type State = {
    languages: Record<string, Language>
}
type Actions = {
    setLanguages: (languages: Language[]) => void
}
type Store = State & Actions

export const useLanguageStore = create<Store>((set) => ({
    languages: {},
    setLanguages: (languages) =>
        set({ languages: indexBy(prop('id'), languages) }),
}))
