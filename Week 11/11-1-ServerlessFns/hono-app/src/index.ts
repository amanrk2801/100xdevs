import { Hono } from 'hono'

const app = new Hono()

app.post('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})

export default app

// npm run dev

// Go to postman
// POST http://127.0.0.1:8787?param=2

// Headers
// Authorization  12345

// Body (JSON)
// {
//   "message": "Hi";
// }

