import { DataSource } from "typeorm";

//TODO: extract
const SYM_AUTH_DB_PATH = 'sym_auth_db.sqlite'

export const symAuthDataSource = new DataSource({
  type: 'better-sqlite3',
  database: SYM_AUTH_DB_PATH
})

