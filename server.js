const express = require('express')
const port = '3000'

const app = express();

app.use(express.static(__dirname))

app.get('/', (req, res) => {
    res.render('../views/index.ejs')
})

app.listen(port, () => console.log(`Server listening to port: ${port}`))