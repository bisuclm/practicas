var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var session = require('express-session');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var productsRouter =require('./routes/products');
var cartsRouter =require('./routes/carts');
var ordersRouter =require('./routes/orders');
var viewsRouter = require('./routes/views');

var app = express();
//middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'ssshhhhh',saveUninitialized: true,resave: true}));

app.use('/', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/users/orders', ordersRouter);
app.use('/api/users/carts',cartsRouter);
app.use('/api/products',productsRouter);
app.use('/phoneshop/views', viewsRouter);

module.exports = app;
