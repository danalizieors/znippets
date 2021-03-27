import React from 'react'
import { useDispatch } from 'react-redux'
import { Redirect, Route, useParams } from 'react-router-dom'
import { actions } from '../actions'
import { decode } from '../utilities/conversion'

type Params = {
    data: string
}

const SnippetLoader: React.FC = ({ children }) => {
    const { data } = useParams<Params>()
    const decoded = decode(data)

    const dispatch = useDispatch()
    if (decoded) {
        dispatch(actions.snippet.set(decoded))
    }

    return <>{children}</>
}

export const SnippetLoaderRoute: React.FC = () => (
    <Route path='/s/:data'>
        <SnippetLoader>
            <Redirect to='/' />
        </SnippetLoader>
    </Route>
)
