import { Resolvers } from './resolvers-types';
import { DbClient, default as Db } from './db';
import {
  clientTransform,
} from './transforms';

interface ResolverContext {
  clients?: DbClient;
}

function createResolvers(db: Db): Resolvers<ResolverContext> {
  const resolvers: Resolvers<ResolverContext> = {
    Query: {
      clients() {
        return db.getAllClients().map(clientTransform);
      },
    }
  }
  return resolvers;
}

export default createResolvers;
