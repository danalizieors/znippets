import create from 'zustand'

const state = {
    language: 'plain text',
    code: '',
}

type State = typeof state
type Actions = {
    set: (state: State) => void
    reset: () => void
}
type Store = State & Actions

export const useSnippetStore = create<Store>((set) => ({
    ...state,
    set: (state) => set(state),
    reset: () => set(state),
}))
