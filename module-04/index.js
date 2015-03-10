'use strict';

var checkSite = require('./check-site');

checkSite(function(err, result){
  if(err) {
    console.log('There was an error.');
    console.log(err);
  } else {
    console.log(result);
  }
});
