// write a function to create a users table in your database
import { Client } from "pg";

// url: postgresql://username:password@host/database
const client = new Client({
  connectionString: "postgresql://postgres:123456789@localhost:5432/postgres",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(
    `CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );`
  );
  console.log(result);
  
}

createUsersTable();