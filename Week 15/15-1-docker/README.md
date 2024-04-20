## Run project locally
- npm install
- npx prisma generate
- npm run build
- node dist/index.js

## create docker image
- create and write code in Dockerfile
- create and write code in .dockerignore file
- run terminal
```
    docker build -t backend-app
    docker run -p 3000:3000 -e DATABASE_URL="" backend-app

```
hello
