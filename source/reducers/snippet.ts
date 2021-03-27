import { createReducer } from '@reduxjs/toolkit'
import { actions } from '../actions'

export type Snippet = {
    language: string
    code: string
}

export const initialState: Snippet = {
    language: 'plain text',
    code: '',
}

export const snippet = createReducer(initialState, {
    [actions.snippet.set.type]: (state, { payload }) => ({
        ...state,
        ...payload,
    }),
    [actions.snippet.reset.type]: () => initialState,
})
