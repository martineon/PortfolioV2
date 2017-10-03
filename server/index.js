const express = require('express');
const app = express();
const api = require('./api');
const bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use('/api', api);

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.get('/coucou', (req, res) => {
  res.send('coucou')
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
