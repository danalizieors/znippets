import React from 'react'
import { Route } from 'react-router'
import { Editor } from './components/editor'
import { SnippetLoaderRoute } from './links/SnippetLoaderRoute'

export const Routes: React.FC = () => (
    <>
        <Route path='/'>
            <Editor />
        </Route>
        <SnippetLoaderRoute />
    </>
)
