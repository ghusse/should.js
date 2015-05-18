"use strict";

var err = require('../util').err;
var should = require('../../');

describe("should as a method", shouldMethodSuite);

function shouldMethodSuite(){
  before(function(){
    delete Object.prototype.should;
  });
  
  after(function(){
    should.extend();
  });
  
  it("should correctly detect empty strings", emptyTest);
}

function emptyTest(){
  should('').be.empty;
  should('foo').no.be.empty;
}
