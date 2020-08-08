require('dotenv').config()
const express = require('express')
const bodyParser = require("body-parser");
const cors = require("cors");
const { PORT } = require('./src/config')

const app = express()

app.use(cors());
app.use(bodyParser.json());

const routes = require('./src/routes')
const { connect: connectToDB } = require('./src/repository')


app.get('/', (req, res) => {
    res.send('ok')
})

app.use('/api', routes)

function startServer(isConnectedToDB) {
    if(!isConnectedToDB) return console.error('Failed to connected to DB.\nStopping Server.')
    console.log('Connected to DB')
    app.listen(PORT, console.log(`Server running on port ${PORT}`))
}

connectToDB()
    .then(startServer)
    .catch(err => console.error(err))
