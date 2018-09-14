require('dotenv').config()
const express = require('express'),
 bodyParser = require('body-parser'),
 massive = require('massive')
 ctrl = require('./controller.js');

const {SERVER_PORT, DB_CONNECTION} = process.env

const app = express();
app.use(bodyParser.json());

app.post('/api/users', ctrl.addUser)
app.post('/api/users', ctrl.loginUser)

massive(DB_CONNECTION)
  .then(db => {
    app.set('db', db)
    app.listen(SERVER_PORT, ()=> console.log(`listening on port ${SERVER_PORT}`))
  })

