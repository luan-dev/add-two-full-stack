# Add Two (Full Stack)

Front-end and backend to add two numbers

## Prerequisites

-   [Node 16.16.0 (Latest)](https://nodejs.org/en/)
-   [Yarn 1.22.0 (Latest)](https://yarnpkg.com/)
-   [Docker](https://www.docker.com/)

## Getting Started

The application is packaged within a docker-compose stack:

```bash
docker-compose up --build
```

Any subsequent runs will not require the `--build` flag:

```bash
docker-compose up
```

The API will run on port `8080` and the front-end will run on port `3000`.

## API

The API has one endpoint: `/add`.
It accepts an array of `nums` and returns the sum of all numbers:

```
GET /add?nums=1&nums=2
```

The server will respond with a JSON object:

```json
{
    "total": 3
}
```

The way that this is written, you can add as many numbers as you want by appending more `nums` to the query string

### Development

Install all the dependencies:

```bash
yarn install
```

[`nodemon`](https://www.npmjs.com/package/nodemon) is used to automatically restart the server when changes are made:

```bash
yarn dev
```

### Testing

Unit tests are included using `jest`:

```bash
yarn test
```

### Production

If you wish to build for production servers:

```bash
yarn build
```

## Frontend

The frontend is bootstrapped using [`create-react-app](https://create-react-app.dev/).
This is a very basic application to act as a proof of concept.
There is a lot of room for improvement

### Development

Install all the dependencies:

```bash
yarn install
```

Run the dev server:

```bash
yarn start
```

### Production

A Dockerfile named `Dockerfile.prod` is used to build the production version of the frontend

## NOTES

-   The `.env` file is usually not committed to the repository, but we include it here for convenience
