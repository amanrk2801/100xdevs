<!-- Installing prisma in a fresh app
Let’s create a simple TODO app
 
Initialize an empty Node.js project
npm init -y

Add dependencies
npm install prisma typescript ts-node @types/node --save-dev

Initialize typescript
npx tsc --init

tsconfig.json
Change `rootDir` to `src`
Change `outDir` to `dist`

Initialize a fresh prisma project
npx prisma init

Generate migrations
npx prisma migrate dev --name Initialize the schema UserAndTodoAdded

How to generate the client?
npx prisma generate

  -->