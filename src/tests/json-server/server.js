// json.server.js 
// https://github.com/typicode/json-server

const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('./src/tests/json-server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running on port 3001')
})