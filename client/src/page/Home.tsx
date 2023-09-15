import React from 'react';
import { gql } from '@apollo/client';
import { useRetrieveClientsQuery } from '../generated/graphql';
import ClientsTable from '../components/ClientsTable';
import Loading from '../components/Loading';

export const RETRIEVE_CLIENTS = gql`
    query RetrieveClients($id: String) {
        queryClientList {
            id
            firstName
            lastName
            email
            events {
                id
                title
                startDateTime
            }
        }
        findClientById(id: $id) {
            id
            firstName
            lastName
            email
            events {
                id
                startDateTime
                title
            }
        }
    }
`;

const Home: React.FC = () => {
    const { data, loading, error } = useRetrieveClientsQuery();
    if (loading) return <Loading />;
    if (!data) return <p>No data.</p>;

    return (
        <div className='container mx-auto px-4 py-4'>
            <ClientsTable client={data.queryClientList} />
        </div>
    )
    
}

export default Home;