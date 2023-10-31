const express = require('express')
const morgan = require('morgan')
const dotenv = require('dotenv').config();
const handlebars = require('express-handlebars');
const path = require('path')
const methodOverride = require('method-override')
const app = express()

const productRoute = require("./src/routes/product");
const fishRoute = require("./src/routes/fish");
const bodyParser = require('body-parser');
const db = require('./src/config/db')

app.use(function (req, res, next) {
  // res.write('BÀI LAB ĐÃ HOÀN THÀNH')
  // Website you wish to allow to connect
  // res.setHeader('Access-Control-Allow-Origin', 'https://fish-sell.vercel.app');
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
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

app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars')
app.set('views', path.join(__dirname, 'src/views'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(morgan('combined'))
app.use(express.json());
app.use(methodOverride('_method'))
app.use("/product", productRoute);
app.use("/fish", fishRoute);

app.get('/', (req, res) =>  res.render('home'))
const port = process.env.PORT
app.listen(port, () => {
  console.log('Example app listening on port ' + port)
})