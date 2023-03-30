import dotenv from "dotenv";
import { Pool } from "pg";

dotenv.config();

const { DB_USER, DB_PASSWORD, DB_NAME } = process.env;

const client = new Pool({
  host: "localhost",
  user: DB_USER,
  password: DB_PASSWORD,
  database: DB_NAME,
});

export default client;
