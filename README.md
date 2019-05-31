# nextjs-docker

This is initial project next.js (SSR) with docker.

Specification :
* use docker image node:10 (node version v10.15.3)
* react 16.8.4
* next.js 8.0.3
* eslint
* env variable production and dev with (next.config.js)

## Prerequisite

Install docker on your local machine.

## Build on Docker 

Enterance script :
```
Run Development server : $ ./build-dev
Run Staging server : $ ./build-stg
Run Production server : $ ./build-prod
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
$ ./build-local
```
App will run on port 3000.