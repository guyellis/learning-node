'use strict';

var request = require('request');

// What is module.exports?
module.exports = function(callback) {
  request('http://www.yahoo.com', function(error,response){
    if(response.statusCode === 200) {
      return callback(null, 'Received expected status');
    } else {
      return callback('Unexpected status ' + response.statusCode);
    }
  });
};

// Why does callback() function take a null as the first parameter if
// the call is successful and not if the call fails?
