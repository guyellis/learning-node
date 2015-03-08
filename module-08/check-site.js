'use strict';

var request = require('request');

module.exports.run = function(callback) {
  request('http://www.yahoo.com', function(error,response){
    if(response.statusCode === 200) {
      return callback(null, 'Received expected status');
    } else {
      return callback('Unexpected status ' + response.statusCode);
    }
  });
};

