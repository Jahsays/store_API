require('dotenv').config();
// async errors

const express = require('express');
const app = express();


const errorMiddleware = require('./middleware/error-handler');
const notFoundMiddleware = require('./middleware/not-found');

app.use(express.json)

