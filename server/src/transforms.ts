import { DbClient } from './db';
import {
    Client,
  } from './resolvers-types';

export const clientTransform = (dbClient: DbClient): Client => {
    return {
        id: dbClient.id,
        firstName: dbClient.firstName,
        lastName: dbClient.lastName,
        email: dbClient.email,
        events: dbClient.events,
    };
};