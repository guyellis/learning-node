'use strict';

var assert = require('assert');

var rewire = require('rewire');
var checkSite = rewire('../check-site');

describe('test suite', function(){

  it('should test the expected path', function(done){
    var revert = checkSite.__set__('request', function(url, callback) {
      callback(null, { statusCode: 200 });
    });

    checkSite(function(err, result){
      assert.equal(result, 'Received expected status');
      revert();
      done();
    });
  });

  it('should test the failure path', function(done){
    var revert = checkSite.__set__('request', function(url, callback) {
      callback(null, { statusCode: 404 });
    });

    checkSite(function(err, result){
      assert.equal(err, 'Unexpected status 404');
      revert();
      done();
    });
  });

});
