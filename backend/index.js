
var express = require('express');
var app = express() ;
const db = require('./dbquery')
app.get('/', function (req, res) {
    res.send('Hello from ');
    });
    app.get('/users', db.getUsers)
    app.get('/users/:id', db.getUserById)
    app.post('/users', db.createUser)
    app.put('/users/:id', db.updateUser)
    app.delete('/users/:id', db.deleteUser)
    app.listen(9090);
    console.log('Running on http://localhost:9090');