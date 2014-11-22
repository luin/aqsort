var async = require('async');

module.exports = function aqsort(arr, comp, callback) {
  if (arr.length <= 1) {
    return callback(null, arr);
  }
  var pivotIndex = Math.floor(arr.length / 2);
  var pivot = arr.splice(pivotIndex, 1)[0];
  var left = [];
  var right = [];
  async.eachSeries(arr, function(item, next) {
    comp(item, pivot, function(err, res) {
      if (err) {
        return next(err);
      }
      if (res === 1) {
        right.push(item);
      } else {
        left.push(item);
      }
      next();
    });
  }, function(err) {
    if (err) {
      return callback(err);
    }
    async.parallel({
      left: function(next) { aqsort(left, comp, next); },
      right: function(next) { aqsort(right, comp, next); }
    }, function(err, res) {
      if (err) {
        return callback(err);
      }
      callback(null, res.left.concat(pivot, res.right));
    });
  });
};
