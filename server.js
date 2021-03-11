var express = require(‘express’);

var app = express();

var server = app.listen(8000, () => {
 console.log(‘server is running on port’, server.address().port);
});