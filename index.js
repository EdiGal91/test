const express = require('express')
const routes = require('./routes')

const app = express()

app.get('/', (req, res) => {
    res.send('ok')
})

app.use('/api',routes)

const { PORT: port = 3001 } = process.env
app.listen(port, console.log('Server running'))
