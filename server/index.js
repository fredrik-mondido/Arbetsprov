const path = require('path');
const express = require('express');

const app = express();

app.use(express.static(path.resolve('client', 'build')));

app.get('*', (req, res) => {
    res.sendFile(path.resolve('client', 'build', 'index.html'));
})

module.exports = app;