const jsonServer = require('json-server')
const path = require('path')
const {readFileSync} = require("fs");

const PORT = 8000;

const server = jsonServer.create()
const router = jsonServer.router(path.join(__dirname, 'db.json'))

const middlewares = jsonServer.defaults()

server.use(middlewares)

server.use(jsonServer.bodyParser)

server.use((_, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', '*')
    next()
})

//Middleware for response delay
server.use((req, res, next) => {
    new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 800)
    }).then(() => next())
})

const isAuthorized = (request) => {
    return 'authorization' in request.headers;
}

//Middle ware for Auth check
server.use((req, res, next) => {
    if (!isAuthorized(req)) {
        return res.status(401).json({statusCode: 'Authorization required'});
    }
    next();
})


server.post('/login', (req, res) => {
    const {userName, password} = req.body;
    const db = JSON.parse(readFileSync(path.resolve(__dirname, 'db.json'), {encoding: 'utf-8'}));
    const {users} = db
    const user = users.find((user) => user.userName === userName);
    console.log('login: ',  users)
    if (user && user.password === password) {
        return res.status(200).json({id: user.id, userName: user.userName})
    }
    res.status(403).json({message: 'AUTH ERROR'})
})


server.use(router)

server.listen(PORT, () => {
    console.log(`JSON Server is Running on port ${PORT}`)
})


