const express = require('express')
const app = express()
const port = 3000

app.get('/chipichipi', (req, res) => {
    res.send('chapachapa');
    res.end();
})

app.listen(port, () => {
    console.log(`🚀 server running on PORT: ${port} http://localhost:${port}/`)
})