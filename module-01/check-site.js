'use strict';

var request = require('request');

request('http://www.yahoo.com', function(err, response){
  console.log('www.yahoo.com: ', response.statusCode);
});
