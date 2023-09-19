import { createApolloServer } from './apollo-server';
import { DB_FILE_PATH } from './constants';
import Db from './db';

const db = new Db(DB_FILE_PATH);


const apolloServer = createApolloServer(db);

export const handler = apolloServer.createHandler();
