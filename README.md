# About

A boilerplate express app that provides simple authentication service. Typescript + Prisma + PostgreSQL + JWT.

# Getting started

Git clone repo or download this project:

```bash
git clone https://github.com/RetrasTT/express-typescript-prisma.git
```

Install yarn globally:

```bash
npm install -g yarn
```

Download all dependencies:

```bash
yarn install
```

Invoke the Prisma CLI with:

```
npx prisma
```

Add .env in root directory and define server port, database url to connect to the database, jwt secret key, for example:

```bash
PORT=5000
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
JWT_SECRET_KEY="SECRET_KEY"
```

Format of the connection URL (DATABASE_URL):

```bash
postgresql://USER:PASSWORD@HOST:PORT/DATABASE?schema=SCHEMA

------------------------------------------------------------------------------------

USER: The name of your database user
PASSWORD: The password for your database user
HOST: The name of your host name (for the local environment, it is localhost)
PORT: The port where your database server is running (typically 5432 for PostgreSQL)
DATABASE: The name of the database
SCHEMA: The name of the schema inside the database
```

Use prisma migrate:

```bash
npx prisma migrate dev --name init
```

Generate prisma client:

```bash
yarn prisma generate
```

Whenever you update your Prisma schema, you will have to update your database schema:

```bash
yarn prisma migrate dev
```

Check Prisma [docs](https://www.prisma.io/docs) for more information about how to define models, make queries, connect to the database and more.

# Dev, Build, Start

To start server in development mode:

```bash
yarn dev
```

To build project:

```bash
yarn build
```

To start server in production mode:

```bash
yarn start
```

# APIs

```bash
  POST   | /api/user/registration
  POST   | /api/user/login
  POST   | /api/user/refreshToken
```

1. request body for /api/user/registration

```bash
{
  "username": "username",
  "password": "password"
}
```

2. request body for /api/user/login

```bash
{
  "username": "username",
  "password": "password"
}
```

3. request header for /api/user/refreshToken

```bash
{
  "Authorization": "Bearer token"
}
```
