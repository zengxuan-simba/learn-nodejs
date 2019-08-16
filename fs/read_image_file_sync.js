'use strict';

//read from sample.png by sync method

console.log('>>>BEGIN SYNC<<<');

const fs = require('fs');

var data = fs.readFileSync('./fs/sample.png','utf-8');
console.log(data);

console.log('>>>END<<<');