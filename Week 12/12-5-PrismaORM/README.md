<!-- Steps- Installing prisma in a fresh app
Let’s create a simple TODO app -->
 
<!-- Initialize an empty Node.js project
npm init -y 
-->

<!-- Add dependencies
npm install prisma typescript ts-node @types/node --save-dev 
-->

<!-- Initialize typescript 
npx tsc --init 
-->

<!-- 
tsconfig:
Change `rootDir` to `./src` 
Change `outDir` to `./dist`
-->

<!-- Initialize a fresh prisma project 
npx prisma init

After code models in schema.prisma
Generate migrations:
npx prisma migrate dev --name Initialize the schema
eg: npx prisma migrate dev --name todo_schema

How to generate the client?
npx prisma generate

-->
 