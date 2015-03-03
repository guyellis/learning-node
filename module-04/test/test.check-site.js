'use strict';

var assert = require('assert');

var rewire = require('rewire');
var index = rewire('../check-site');

describe('test suite', function(){
  it('should run all the tests', function(done){
    index.__set__('request', function(url, callback) {
      // What happens if we change the status that we're faking
      // to something else like a 301 or 404?
      callback(null, { statusCode: 200 });
    });

    index.run(function(result){
      assert.equal(result, 'Received expected status');
      done();
    });
  });
});
