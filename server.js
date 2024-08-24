// server.js
const express = require('express');
const app = express();

const bodyParser = require('body-parser');
const cors = require('cors');

const db = require('./app/config/db.config.js');
db.sequelize.sync({ force: true }).then(() => {
  console.log('Drop and Resync with { force: true }');
});

const productRouter = require('./app/routers/product.router.js');
const pruebaRouter = require('./app/routers/prueba.router.js');

app.use(cors());
app.use(bodyParser.json());
app.use('/', productRouter);
app.use('/', pruebaRouter);

app.get("/", (req, res) => {
  res.json({ message: "Welcome to the Product API" });
});

// Create a Server
const server = app.listen(8080, function () {
  let host = server.address().address
  let port = server.address().port
  console.log("App listening at http://%s:%s", host, port); 
});
