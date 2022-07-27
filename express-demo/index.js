const express = require('express')
const app = express();

app.get('/', function request(req, res) {
    res.send('hello world')
}),
