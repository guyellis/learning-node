'use strict';

// Why don't we need to do an "npm install assert" ?
var assert = require('assert');

var index = require('../check-site');

describe('test suite', function(){
  it('should run all the tests', function(done){
    index.run(function(result){
      assert.equal(result, 'Received expected status');
      done();
    });
  });
});
