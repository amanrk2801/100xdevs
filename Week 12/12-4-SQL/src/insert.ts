// write a function to create a users table in your database.
import { Client } from 'pg'
 
const client = new Client({
  connectionString: "postgresql://postgres:123456789@localhost/postgres"
})

// TO avoid SQL injections we use this syntax
async function insertUserData(username:string, password:string, email:string) {
    await client.connect()
    const result = await client.query(`
        INSERT INTO users(username, password, email)
        VALUES ($1, $2, $3) 
    `, [username,password,email])
    console.log(result)
}

insertUserData(
    "aman",
    "123",
    "aman@gmail.com"

);

// Avoid this syntax -> cause SQL injections
// `INSERT INTO users(username, password, email)
//  VALUES (${username}, ${password}, ${email}) `