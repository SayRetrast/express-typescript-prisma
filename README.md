# About

This boilerplate provides express server and prisma with simple jwt authentication.

# Getting started

Clone project:

```bash
git clone https://github.com/RetrasTT/express-ts-prisma-jwt.git
```

Download yarn globally:

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

Define url in .env file to connect to database, for example:

```bash
DATABASE_URL="postgresql://johndoe:randompassword@localhost:5432/mydb?schema=public"
```

Generate prisma client after every change in prisma schema:

```bash
yarn prisma generate
```

Check Prisma [docs](https://www.prisma.io/docs) for more information:

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
