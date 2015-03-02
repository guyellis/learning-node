'use strict';

var request = require('request');

module.exports.run = function(callback) {
  request('http://www.yahoo.com', function(error,response){
    if(response.statusCode === 200) {
      return callback('Received expected status');
    } else {
      return callback('Unexpected status ' + response.statusCode);
    }
  });
};

module.exports.run(function(result){
  console.log(result);
});
