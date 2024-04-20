<!-- 
cmd:
docker run --name my-postgres -e POSTGRES_PASSWORD=mysecretpassword -d -p 5432:5432 postgres 

docker ps

docker exec -it <CONTAINER ID> /bin/bash
eg: docker exec -it 1bad0643601b /bin/bash

root@1bad0643601b:/# psql -h localhost -d postgres -U postgres


For nodejs:
cmd:
npm init -y
npx tsc --init

tsconfig:
rootDir: /src
outDir: /dist

src
    index.js

npm i pg
npm i @types/pg  

cmd:
tsc -b
node dist/index.js
-->



