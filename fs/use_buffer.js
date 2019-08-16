'use strict';

//read binary data from 'sample.txt'

const fs = require('fs');

var data  = fs.readFileSync('./fs/sample.txt');
console.log(data);
console.log(data.length + 'bytes');
console.log('First three bytes:' + data[0] + ',' + data[1] + ',' + data[2]);

//Buffer->string
var text = data.toString('utf-8');
console.log(text);

//string -> Buffer

var buf = new Buffer(text,'utf-8');
console.log(buf);
