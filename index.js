const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const port = 9000

const route = require('./src/routes')

const db = require('./src/config/db')

route(app);
db.connect();

app.use(morgan('combined'))
app.use(cors())

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})