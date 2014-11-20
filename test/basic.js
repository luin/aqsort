var aqsort = require('../');
var expect = require('chai').expect;

describe('basic sort', function() {
  beforeEach(function(done) {
    this.arr = [1, 9, 3, 7];
    var self = this;
    aqsort([1, 9, 3, 7], function(a, b, callback) {
      if (a > b) {
        callback(null, 1);
      } else if (a === b) {
        callback(null, 0);
      } else {
        callback(null, -1);
      }
    }, function(err, res) {
      self.err = err;
      self.res = res;
      done();
    });
  });
  it('should run successfully', function() {
    expect(this.err).to.equal(null);
  });
  it('should sort the array', function() {
    expect(this.res).to.eql([1, 3, 7, 9]);
  });
  it('should not affect the original array', function() {
    expect(this.arr).to.eql([1, 9, 3, 7]);
  });
});
