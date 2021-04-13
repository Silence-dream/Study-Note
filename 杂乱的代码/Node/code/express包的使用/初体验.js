const express = require('express')
const app = express()
const port = 80

app.use((req, res) => res.send('你好世界'));
app.listen(port, () => console.log(`http://localhost`))