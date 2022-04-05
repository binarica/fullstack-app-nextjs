# Fullstack Project with Next.js (REST API)

This is a fullstack application that allows therapists to keep a list of patients' sessions, fees and payments.

Built with [Next.js](https://nextjs.org/) using [React](https://reactjs.org/) (frontend), [Express](https://expressjs.com/) and [Prisma Client](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client) (backend). It uses a SQLite database file with some initial dummy data which you can find at [`./prisma/dev.db`](./prisma/dev.db).

## Getting started

### 1. Install dependencies

Install npm dependencies:

```
npm install
```

### 2. Start the app

```
npm run dev
```

The app is now running, navigate to [`http://localhost:3000/`](http://localhost:3000/) in your browser to explore its UI.

<details><summary>Expand for a tour through the UI of the app</summary>

<br />

**Dashboard** (located in [`./pages/index.tsx`](./pages/index.tsx))

**New Session** (located in [`./pages/new.tsx`](./pages/new.tsx))

</details>

## Using the REST API

You can also access the REST API of the API server directly. It is running on the same host machine and port and can be accessed via the `/api` route (in this case that is `localhost:3000/api/`, so you can e.g. reach the API with [`localhost:3000/api/feed`](http://localhost:3000/api/feed)).

### `GET`

- `/api/sessions`: Fetch all sessions

### `POST`

- `/api/session`: Create a new session
  - Body:
    - `date: DateTime` (required): The date of the session
    - `patient: String` (required): The patient's name
    - `fee: Int` (required): The fee for the session
- `/api/payment`: Create a new payment
  - Body:
    - `sessionId: Int` (required): The ID of the session
    - `amount: Int` (required): The amount of the payment

## Switch to another database (e.g. PostgreSQL, MySQL, SQL Server, MongoDB)

If you want to try another database than SQLite, you can adjust the the database connection in [`prisma/schema.prisma`](./prisma/schema.prisma) by reconfiguring the `datasource` block.

Learn more about the different connection configurations in the [Prisma docs](https://www.prisma.io/docs/reference/database-reference/connection-urls).
