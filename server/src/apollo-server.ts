import { GraphQLFileLoader } from '@graphql-tools/graphql-file-loader';
import { ApolloServer } from 'apollo-server-lambda';
import { loadSchemaSync } from '@graphql-tools/load';
import { GRAPHQL_SCHEMA_PATH } from './constants';
import { addResolversToSchema } from '@graphql-tools/schema';
import Db from './db';
import createResolvers from './resolvers';

const schema = loadSchemaSync(GRAPHQL_SCHEMA_PATH, {
  loaders: [new GraphQLFileLoader()],
});

export function 
createApolloServer(
  db: Db,
) {
  const resolvers = createResolvers(db);

  const schemaWithResolvers = addResolversToSchema({
    schema,
    resolvers,
  });

  const server = new ApolloServer({
    schema : schemaWithResolvers,
    resolvers,
    introspection: !!process.env.IS_LOCAL,
  });
  return server;
}
