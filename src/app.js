'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express ();
const router = express.Router();

//Conecta ao database (FAZER DESBUG!!!)
mongoose.connect('mongodb+srv://raissa:raissa@ndstr.yjxnldv.mongodb.net/?retryWrites=true&w=majority');

//Load dos models
const Product = require('./models/product');

//Load das rotas
const indexRoute = require('./routes/index-route');
const productRoutes = require('./routes/product-routes');


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false}));


app.use('/', indexRoute);
app.use('/products', productRoutes);

module.exports = app;