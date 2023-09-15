import { createApolloServer } from './apollo-server';
import * as express from 'express';
import { createServer } from 'http';
import { DB_FILE_PATH, PORT, STATIC_ROOT_FOLDER_PATH } from './constants';
import Db from './db';

const app = express();

async function main() {
  const db = new Db(DB_FILE_PATH);

  app.use('/static', express.static(STATIC_ROOT_FOLDER_PATH));
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