/*
** Author: Fuad
** github.com/FuadHy
** To: addissoftwares
*/

const express = require('express')
const app = express()
const routes = require('./routes.js')
const db = require('./db')

const PORT = process.env.PORT || 3002
const log = console.log

const morgan = require('morgan')
var logger = morgan('combined')

const cors = require('cors')
app.use(cors())

app.use(logger)

app.use(express.json())
app.use(express.urlencoded())

try { db.authenticate() ; db.sync() }
catch(e) { log('error connectind to databas: ', e) }

// routes
app.use('/', routes)

app.all('*', (_, res) => res.status(404).end('404! NOT FOUND'))

app.listen(PORT, () => log(`Test server is running on port: ${PORT}`))