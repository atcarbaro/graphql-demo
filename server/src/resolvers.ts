import { Resolvers } from './resolvers-types';
import { DbClient, default as Db } from './db';
import {
  clientTransform,
} from './transforms';

interface ResolverContext {
  clients: DbClient;
}

function createResolvers(db: Db): Resolvers<ResolverContext> {
  const resolvers: Resolvers<ResolverContext> = {
    Query: {
      queryClientList() {
        return db.getAllClients().map(clientTransform);
      },
      findClientById(_parent, args) {
        const { id } = args;
        const dbClient = db.getClientsById(id);
        if (!dbClient) return null;
        return clientTransform(dbClient);
      }
    }
  }
  return resolvers;
}

export default createResolvers;
