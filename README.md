# nextjs-docker

This is initial project next.js (SSR) with docker.

Specification :
* use docker image node:10 (node version v10.15.3)
* react 16.8.4
* next.js 8.0.3
* eslint
* env variable production and dev with (next.config.js)
* example of usage of styled component ( /pages/index)
* build in json server on port 3001 ( /src/test/json-server)
* example unit test with mocking axios request ( /src/tests/example/axios-mocking)
* example of function unit test ( /utils/arith.test.js )
* example context api as state management ( /src/context/account, /pages/_app.js, /pages/index.js )

## Prerequisite

Install docker on your local machine.

## Build on Docker

Entrance scripts :
```
Run Development server : $ ./build/dev
Run Staging server : $ ./build/stg
Run Production server : $ ./build/prod
```
App will run on port 3000.

## Run Local WITHOUT Docker

Prepare your `env.js` first.

```
$ yarn install
$ yarn dev
```
Run on port 3000 in your local machine.

## Run Local WITH Docker

Prepare your `env.js` first.

```
$ ./build/local
```
App will run on port 3000.

## Run Json Server

```
$ yarn jsonserver
```
location of json.db : ./tests/json-server/db.json

## Analyze bundle size

```
$ yarn analyze
```
