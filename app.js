/* global process, require */
const bodyParser = require('body-parser');
const express = require('express');
const http = require('http');

let router = express();
let server = http.createServer(router);
let port = process.argv[2] || 8080;

// for parsing application/json
router.use(bodyParser.json());
// for parsing application/x-www-form-urlencoded
router.use(bodyParser.urlencoded({ extended: true }));

router.get('/', (req, resp) => {
  return resp.status(200).send();
});

router.post('/*', (req, resp) => {
  console.log(req.body);
  return resp.status(200).send();
});


server.listen(port, '0.0.0.0', () => {
  process.stdout.write(`Server running at localhost: ${port}.\n`);
  server.address();
});
