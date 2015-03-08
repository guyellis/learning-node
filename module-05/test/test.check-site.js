'use strict';


var assert = require('assert');

var checkSite = require('../check-site');

describe('site status', function(){
  it('should check the expected status of a site', function(done){
    checkSite(function(err, result){
      assert.equal(result, 'Received expected status');
      done();
    });
  });
});
