const addon = require('../native');

const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
    const cpus = addon.threadCount()
    res.send(`Hello World! ${cpus} cpus`)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
