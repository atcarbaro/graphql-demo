import React from 'react'
import { gql } from '@apollo/client';
import { useRetrieveClientsQuery } from '../generated/graphql';
import Loading from '../components/Loading';
import { useParams } from 'react-router-dom';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export const RETRIEVE_CLIENTS_BY_ID = gql`
    query RetrieveClientsById($id: String) {
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

export default function ClientDetails() {
    let { id } = useParams();
    const { data, loading, error } = useRetrieveClientsQuery({ variables: { id } });
    if (loading) return <Loading />;
    if (!data) return <p>No data.</p>;

    console.log('data', data.findClientById)

    return (
        <div className='container mx-auto px-4 py-4'>
            <Card>
                <CardHeader>
                    <CardTitle>{data.findClientById.lastName}, {data.findClientById.firstName}</CardTitle>
                    <CardDescription className='lowercase'>{data.findClientById.email}</CardDescription>
                </CardHeader>
                <CardContent>
                    {data.findClientById.events.map((event) => 
                        <div
                            key={event.id}
                            className="mb-1 grid grid-cols-[25px_1fr] items-start pb-3 last:mb-0 last:pb-0"
                        >
                            <span className="flex h-2 w-2 translate-y-1 rounded-full bg-sky-500" />
                            <div className="space-y-1">
                                <p className="text-sm leading-none capitalize">
                                    {event.title}
                                </p>
                            </div>
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    )
}
