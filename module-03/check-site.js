'use strict';

var request = require('request');

request('http://www.yahoo.com', function(err, response){
  console.log('www.yahoo.com: ', response.statusCode);
});

request({uri:'http://yahoo.com', followRedirect: false}, function(err, response){
  console.log('yahoo.com: ', response.statusCode);
});

console.log('done');

// Which one responds first? Why?
// Is the order of response guaranteed?
