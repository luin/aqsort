# AsyncQsort
Asynchronous qsort implemented in JavaScript

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
