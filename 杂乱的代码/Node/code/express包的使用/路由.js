const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.get('/index', (req, res) => {
    res.send('Hello index');
});
app.get('/list', (req, res) => {
    res.send('Hello list');
});

app.listen(port, () => {
    console.log(`http://localhost`);
});