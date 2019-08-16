'use strict';
//write text to 'output.txt'
const fs = require('fs');
console.log('>>>BEGIN WRITE SYNC<<<');
var data = 'Hello , Node.js for sync';
fs.writeFileSync('./fs/output.txt',data);

console.log('>>>END<<<');