const bodyParser = require('body-parser');
const express = require('express');
const morgan = require('morgan');
const app = express();
const helmet = require('helmet');
const cors = require('cors');
const Routes = require('./routes');
//middleware
// app.use(express.urlencoded());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(helmet());
app.use(cors());

//

//database
//read public
app.use('/public', express.static('public'));
//router
Routes(app);

//handle errors

module.exports = app;
