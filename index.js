const express = require('express');
const mongoose = require('mongoose');
const routes = require('./src/Routes');
const app = express();

app.listen(3000, (err) => console.log(err ? 'Wrong!' : 'Application running!'));
mongoose.connect('mongodb://localhost:27017/tsnode', { useNewUrlParser: true, useUnifiedTopology: true }, (err) => console.log(err ? 'Database connection error' : 'Mongodb Connected!'));

app.use(routes);
