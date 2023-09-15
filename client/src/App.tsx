import React from 'react';
import { gql, useQuery } from '@apollo/client';

export const GET_CLIENTS = gql`
  query GetClients {
    clients {
      id
      firstName
      lastName
      email
      events {
        title
        startDateTime
      }
    }
  }
`;

const App: React.FC = () => {
    const { data } = useQuery(GET_CLIENTS, { variables: { first: 10 } })

    console.log('data', data)

    return <h1>Hello world!</h1>;
    
}

export default App;