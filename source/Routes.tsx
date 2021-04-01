import { VStack } from '@chakra-ui/layout'
import React from 'react'
import { Route } from 'react-router'
import { CopyButton } from './components/CopyButton'
import { Editor } from './components/editor'
import { LanguageSelect } from './components/LanguageSelect'
import { SnippetLoaderRoute } from './links/SnippetLoaderRoute'

export const Routes: React.FC = () => (
    <>
        <Route path='/'>
            <VStack
                position='fixed'
                width='full'
                height='full'
                padding='2'
                spacing='2'
            >
                <Editor />
                <LanguageSelect />
                <CopyButton />
            </VStack>
        </Route>
        <SnippetLoaderRoute />
    </>
)
