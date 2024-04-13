```
npm install
npm run dev
```

```
npm run deploy
```

<!-- https://hono.dev/concepts/motivation -->

<!-- Working with cloudflare workers - 
npm create hono@latest my-app

cd my-app
npm i

import { Hono } from 'hono'
const app = new Hono()
app.get('/', (c) => c.text('Hello Cloudflare Workers!'))
export default app

import { Hono } from 'hono'
const app = new Hono()
app.get('/', async (c) => {
  const body = await c.req.json()
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("param"));

  return c.text('Hello Hono!')
})
export default app

Make sure you’re logged into cloudflare (wrangler login)
npm run deploy



 -->