'use strict';

// Why doesn't check-site have .js at the end?
// Why is check-site preceded by ./ and require('request') didn't need this?
var checkSite = require('./check-site');

checkSite(function(err, result){
  if(err) {
    console.log('There was an error.');
    console.log(err);
  } else {
    console.log(result);
  }
});
