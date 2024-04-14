# Step 1 - The stack
- We’ll be building medium in the following stack
1. React in the frontend
2. Cloudflare workers in the backend
3. zod as the validation library, type inference for the frontend types
4. Typescript as the language
5. Prisma as the ORM, with connection pooling
6. Postgres as the database
7. jwt for authentication

# Step 2 - Initialize the backend
```
mkdir medium
cd medium

```
- Initialize a hono based cloudflare worker app 
- Target directory › backend
```
npm create hono@latest
```

- https://hono.dev/top

# Step 3 - Initialize handlers
- https://hono.dev/api/routing

# Step 4 - Initialize DB (prisma)
1. Get your connection url from neon.db or aiven.tech
(we use aiven)
```
postgres://avnadmin:password@host/db
```

2. Get connection pool URL from Prisma accelerate
- https://www.prisma.io/data-platform/accelerate
```
prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTM2M2U5ZjEtNmNjMS00MWNkLWJiZTctN2U4NzFmMGFhZjJmIiwidGVuYW50X2lkIjoiY2I5OTE2NDk0MzFkNWZmZWRmNmFiYzViMGFlOTIwYzFhZDRjMGY5MTg1ZjZiNDY0OTc3MzgyN2IyMzY2OWIwMiIsImludGVybmFsX3NlY3JldCI6Ijc0NjE4YWY2LTA4NmItNDM0OC04MzIxLWMyMmY2NDEwOTExNyJ9.HXnE3vZjf8YH71uOollsvrV-TSe41770FPG_O8IaVgs
```

3. Initialize prisma in your project
Make sure you are in the backend folder
```
npm i prisma
npx prisma init
```
- Replace DATABASE_URL in .env
```
DATABASE_URL="postgres://avnadmin:password@host/db"
```
- Add DATABASE_URL as the connection pool url in wrangler.toml

```
name = "backend"
compatibility_date = "2023-12-01"

[vars]
DATABASE_URL = "prisma://accelerate.prisma-data.net/?api_key=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcGlfa2V5IjoiNTM2M2U5ZjEtNmNjMS00MWNkLWJiZTctN2U4NzFmMGFhZjJmIiwidGVuYW50X2lkIjoiY2I5OTE2NDk0MzFkNWZmZWRmNmFiYzViMGFlOTIwYzFhZDRjMGY5MTg1ZjZiNDY0OTc3MzgyN2IyMzY2OWIwMiIsImludGVybmFsX3NlY3JldCI6Ijc0NjE4YWY2LTA4NmItNDM0OC04MzIxLWMyMmY2NDEwOTExNyJ9.HXnE3vZjf8YH71uOollsvrV-TSe41770FPG_O8IaVgs"
```

# Note: You should not have your prod URL committed either in .env or in wrangler.toml to github wranger.toml should have a dev/local DB url .env should be in .gitignore

4. Initialize the schema 
Code...

5. Migrate your database
```
npx prisma migrate dev --name init_schema
```
6. Generate the prisma client 
```
npx prisma generate --no-engine
```
7. Add the accelerate extension
```
npm install @prisma/extension-accelerate
```
8. Initialize the prisma client
Code...










 
