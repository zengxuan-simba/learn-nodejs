'use strict' ;

//read binary data from 'sample.txt'

var fs = require('fs');

var rs = fs.createReadStream('../stream/sample.txt');
var ws = fs.createWriteStream('../stream/copied.txt');

rs.pipe(ws);
