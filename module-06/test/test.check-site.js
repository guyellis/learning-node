'use strict';

var assert = require('assert');

var rewire = require('rewire');
var checkSite = rewire('../check-site');

describe('test suite', function(){
  it('should run all the tests', function(done){
    checkSite.__set__('request', function(url, callback) {
      callback(null, { statusCode: 200 });
    });

    checkSite(function(err, result){
      assert.equal(result, 'Received expected status');
      done();
    });
  });
});
