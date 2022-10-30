const express = require('express')
const morgan = require('morgan')
const methodOverride = require('method-override')
const app = express()
const port = 9000
const productRoute = require("./src/routes/product");
const bodyParser = require('body-parser');
const db = require('./src/config/db')
app.use(function (req, res, next) {

  // Website you wish to allow to connect
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');

  // Request methods you wish to allow
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

  // Request headers you wish to allow
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader('Access-Control-Allow-Credentials', true);

  // Pass to next layer of middleware
  next();
});

db.connect();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use(express.json());
app.use(methodOverride('_method'))

app.use("/product", productRoute);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})