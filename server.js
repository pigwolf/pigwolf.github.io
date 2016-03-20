'use strict';

const util = require('util');
const http = require('http');
const express = require('express');

const port = process.env.PORT || 3000;
const app = module.exports = express();

// Hand off routing to the client side
app.use(express.static(__dirname));

http.createServer(app).listen(port, () => {
  util.log(`Listening on ${port} ...`);
});
