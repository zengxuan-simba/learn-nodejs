'use strict' ;

var url = require('url');

//parse url
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'));    

//parse incomplete url;
console.log(url.parse('/static/js/juery.js?name=Hello%20world'));

//construst a url
console.log(url.format({
    protocol:'http',
    hostname:'localhost',
    pathname:'/static/js',
    query:{
        name:'Nodejs',
        version:'v1.0'
    }
}));