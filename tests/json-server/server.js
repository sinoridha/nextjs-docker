// json.server.js 
// https://github.com/typicode/json-server

const jsonServer = require('../../node_modules/json-server')
const server = jsonServer.create()
const router = jsonServer.router('./tests/json-server/db.json')
const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)
server.listen(3001, () => {
    console.log('JSON Server is running on port 3001')
})