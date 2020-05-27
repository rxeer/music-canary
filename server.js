const cors = require('cors');
const path = require('path');
const express = require('express');
const compression = require('compression');

const app = express();

app.use(cors());
app.use(compression());
app.use('/', express.static(path.join(__dirname, './dist')));
app.get('*', function(_request, response) {
  response.sendFile(path.resolve(__dirname, './dist/index.html'));
});

const port = process.env.PORT || 5000;
app.listen(port);
