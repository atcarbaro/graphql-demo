import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

export interface DbEvent {
  id: string;
  startDateTime: string;
  title: string;
}

export interface DbClient {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  events: DbEvent[];
}

export interface DbSchema {
  clients: DbClient[];
}

class Db {
  private adapter;
  private db;

  constructor(filePath: string) {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = join(__dirname, filePath);

    this.adapter = new FileSync<DbSchema>(file);

    this.db = low(this.adapter);
    this.db.read();
  }

  getAllClients(): DbClient[] {
    return this.db.get('clients').value();
  }

  getClientsById(id: string) {
    return this.db
      .get('clients')
      .find((u) => u.id === id)
      .value();
  }
}

export default Db;
