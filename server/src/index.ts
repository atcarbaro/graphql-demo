import { createApolloServer } from './apollo-server';
import * as express from 'express';
import { createServer } from 'http';
import { DB_FILE_PATH, PORT } from './constants';
import Db from './db';

const app = express();

async function main() {
  const db = new Db(DB_FILE_PATH);

  const httpServer = createServer(app);
  const apolloServer = await createApolloServer(db, httpServer, app);
  await new Promise<void>((resolve) =>
    app.listen(PORT, () => {
      resolve();
    })
  );
}

main().catch((err) => {
  console.error(err);
});