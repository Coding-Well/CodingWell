const express = require('express')
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const qs = require('querystring');
const crypto = require('crypto');
const md5 = crypto.createHash("md5");
const http = require('http');
const reqhttp = require('request');
const app = express()
const port = 7777

app.listen(port, () => {
  console.log('server running at 7777')
})
