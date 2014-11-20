# AsyncQsort
An implementation of asynchronous quicksort in JavaScript

[![Build Status](https://travis-ci.org/luin/aqsort.png?branch=master)](https://travis-ci.org/luin/aqsort)

## Install

    $ npm install aqsort

## Usage

```javascript
var aqsort = require('aqsort');

aqsort([1, 9, 3, 7], function(a, b, callback) {
  if (a > b) { callback(null, 1); }
  else if (a === b) { callback(null, 0); }
  else { callback(null, -1); }
}, function(err, res) {
  // res === [1, 3, 7, 9]
});
