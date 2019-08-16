'use strict';
//wirte text to 'output.txt'
const fs = require('fs');
console.log('>>>BEGIN WRITE ASYNC<<<');

var data = 'Hello , Node.js';
fs.writeFile('./fs/output.txt',data,function(err){
    if(err){    
        console.log(err);
    }else{
        console.log('OK.');
    }
});

console.log('>>>END<<<');