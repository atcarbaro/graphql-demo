import React from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useNavigate } from "react-router-dom";

import { Client } from '../generated/graphql';

interface ClientsTableProps {
    client?: Client[]
}

export default function ClientsTable({ client }: ClientsTableProps) {
    const navigate = useNavigate();

    const handleDetail = (id: string) => {
        navigate(`/id/${id}`);
    }

    return (
        <Table>
            <TableHeader>
                <TableRow>
                <TableHead>First Name</TableHead>
                <TableHead>Last Name</TableHead>
                <TableHead>Email</TableHead>
                </TableRow>
            </TableHeader>
            <TableBody>
                {client.map((client) => (
                <TableRow onClick={() => handleDetail(client.id)} key={client.id}>
                    <TableCell>{client.firstName}</TableCell>
                    <TableCell>{client.lastName}</TableCell>
                    <TableCell>{client.email}</TableCell>
                </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}
