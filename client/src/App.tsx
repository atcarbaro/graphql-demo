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
        uri: 'http://localhost:3000/graphql',
        cache: new InMemoryCache(),
    });

    
    return (
        <ApolloProvider client={client}>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<ClientDetails />} />
                </Routes>
            </BrowserRouter>
        </ApolloProvider>
    )
    
}

export default App;