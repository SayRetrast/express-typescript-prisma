# About

A boilerplate express app that provides simple authentication service. Typescript + Prisma + PostgreSQL + JWT.

# Getting started

Clone git repo or download this project:

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

Add .env in root directory and define server port, database url to connect to database, jwt secret key, for example:

```bash
PORT=5000
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
JWT_SECRET_KEY="SECRET_KEY"
```

Generate prisma client after every change in prisma schema:

```bash
yarn prisma generate
```

Check Prisma [docs](https://www.prisma.io/docs) for more information about how to define models, make queries, connect to database and more.

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