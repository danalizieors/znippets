import { createAction } from '@reduxjs/toolkit'

export type Snippet = {
    language: string
    code: string
}

export const snippet = {
    set: createAction<Snippet>('snippet/set'),
    reset: createAction('snippet/reset'),
}
