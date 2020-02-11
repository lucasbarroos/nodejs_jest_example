const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/Routes');
const app = express();

app.listen(3000, () => {
  mongoose.connect('mongodb://localhost:27017/tsnode', { useNewUrlParser: true, useUnifiedTopology: true });
});

app.use(routes);
