require('dotenv').config()
const express = require('express')
const routes = require('./src/routes')
const { connect: connectToDB } = require('./src/repository')

const app = express()

app.get('/', (req, res) => {
    res.send('ok')
})

app.use('/api', routes)

function startServer(result) {
    console.log('result:', result)
    const { PORT: port = 3001 } = process.env
    app.listen(port, console.log('Server running'))
}

connectToDB()
    .then(startServer)
    .catch(err => console.error(err))
