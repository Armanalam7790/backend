const express  =  require('express')
const { model } = require('mongoose')
let authRoutes = require('./routes/auth.routes')
const app  =  express()
let cookiePerser  = require('cookie-parser')

app.use(express.json())
app.use(cookiePerser())


app.use('/api/auth', authRoutes)

module.exports = app