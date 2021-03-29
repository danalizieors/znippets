import React from 'react'
import { Redirect, Route, useParams } from 'react-router-dom'
import { useSnippetStore } from '../stores/useSnippetStore'
import { decode } from '../utilities/conversion'

type Params = {
    data: string
}

const SnippetLoader: React.FC = ({ children }) => {
    const { data } = useParams<Params>()
    const decoded = decode(data)

    const set = useSnippetStore((state) => state.set)
    decoded && set(decoded)

    return <>{children}</>
}

export const SnippetLoaderRoute: React.FC = () => (
    <Route path='/s/:data'>
        <SnippetLoader>
            <Redirect to='/' />
        </SnippetLoader>
    </Route>
)
