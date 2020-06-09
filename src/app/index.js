const express = require('express');
const app = express();
const bodyParser = require("body-parser");

const recognize = require('../routes/recognize');
const defaultRoute = require('../routes/defaultRoute');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', defaultRoute)
app.use('/recognize', recognize);
app.use((err, req, res, next) => {
  res.status(err.code || 400).json({
    code: err.code || 400,
    message: err.message || 'An error occurred while making the request',
  });
});

module.exports = app;