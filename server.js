'use strict';

var express = require('express');

var port = 3000;

var app = express();
express.json.type = "application/json";
app.use(express.json());
app.use('/', express.static('./'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.listen(port);
console.log('the server run at: http://localhost:' + port);