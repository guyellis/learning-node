'use strict';

var assert = require('assert');

var rewire = require('rewire');
var index = rewire('../check-site');

describe('test suite', function(){

  it('should test the expected path', function(done){
    index.__set__('request', function(url, callback) {
      callback(null, { statusCode: 200 });
    });

    index.run(function(err, result){
      assert.equal(result, 'Received expected status');
      done();
    });
  });

  it('should test the failure path', function(done){
    index.__set__('request', function(url, callback) {
      callback(null, { statusCode: 404 });
    });

    index.run(function(err, result){
      assert.equal(err, 'Unexpected status 404');
      done();
    });
  });

});
