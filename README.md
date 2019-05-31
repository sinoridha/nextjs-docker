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

## Run Local on Docker

Run on port 3000 in your local machine. (it will run  yarn dev)

```
$ ./build-dev
```


## Run Build Production on Docker

Run on port 3000 for build production (it will run yarn build and yarn start)

```
$ ./build-server
```

## Run Local WITHOUT Docker

Run on port 3000 in your local machine. 

```
$ yarn start
```