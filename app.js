const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

const indexController = require('./controllers/index');
const usersController = require('./controllers/users');
const charactersController = require('./controllers/characters');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, 'views'));
app.locals.basedir = path.join(__dirname, 'views');
app.set('view engine', 'pug')

app.use('/', indexController);
app.use('/users', usersController);
app.use('/characters', charactersController);

module.exports = app;
