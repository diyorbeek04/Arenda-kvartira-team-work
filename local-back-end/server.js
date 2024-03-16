const jsonServer = require('json-server')
const server = jsonServer.create()
const router = jsonServer.router('arenda_kvartira.json')

const middlewares = jsonServer.defaults()

server.use(middlewares)
server.use(router)

const port = process.env.PORT || 8000

server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`)
})