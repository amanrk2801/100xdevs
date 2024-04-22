# Quick Setup Locally - new method

> Install the Dependencies

```
cd daily-code
yarn install
```

> Setup DB (Windows users must have git-bash installed to run the script)

```
cd packages/db
./setupDB.sh
```

> Run locally

```
cd ../..
yarn run dev
```

--------------------------------------
# setup daily code - old method
```
cd daily-code
yarn install
```
# copy the .env example
```
cd /packages/db
cp .env.example .env
```
# docker 
```
docker run -p 5432:5432 --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
```
# for using and testing query 
```
docker exec -it some-postgres psql -U postgres
```
# now modify .env
```
DATABASE_URL="postgresql://postgres:mysecretpassword@localhost:5432/postgres?schema=public"
```
# migrate the database
```
npx prisma migrate dev
npx prisma generate 
npx prisma db seed
```
# Run locally
```
cd ../..
yarn run dev
```


