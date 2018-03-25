'use strict'
const awsServerlessExpress = require('aws-serverless-express-edge')
const app = require('./app')
const server = awsServerlessExpress.createServer(app)
exports.handler = (event, context) => awsServerlessExpress.proxy(server, event, context)