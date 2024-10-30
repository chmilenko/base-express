const express = require('express');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const morgan = require('morgan');
const path = require('path');
const sessionConfig = require('./sessionConfig');

function config(app) {
  app.use(express.static(path.resolve('public')));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use(morgan('dev'));
  app.use(cookieParser());
  app.use(session(sessionConfig));
  app.disable('x-powered-by');
}

module.exports = config;
