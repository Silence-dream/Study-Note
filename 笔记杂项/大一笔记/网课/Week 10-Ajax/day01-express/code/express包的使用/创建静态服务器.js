const express = require('express')
const app = express()
const port = 80

app.use('/public', express.static('public'));
app.listen(80, () => {
    console.log(`http://localhost`)
});