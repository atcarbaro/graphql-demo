import React from 'react';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import {  
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";

import Home from './page/Home';
import ClientDetails from './page/ClientDetails';

const App: React.FC = () => {
    const client = new ApolloClient({
        uri: 'https://ou3pie2ynxoc55wvza34s7f6qm0rnyaz.lambda-url.us-east-1.on.aws/',
        cache: new InMemoryCache(),
    });

    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/id/:id" element={<ClientDetails />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
    
}

export default App;