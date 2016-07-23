// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  // your code goes here
  if (typeof obj === 'string') {
    return '\"' + obj + '\"';
  }
  if (Array.isArray(obj)) {
    // Stringify all array elements and put into elements variable
    var elements = obj.reduce(function (p, c) {
      var ele = stringifyJSON(c);
      if (p.length > 0 && ele.length > 0) {
        return p + ',' + ele;
      }
      return ele;
    }, '');
    return '[' + elements + ']';
  }
  if (typeof obj === 'object' && obj !== null) {
    // Stringify all keys and their values
    var keyPairs = Object.keys(obj).reduce(function (p, c) {
      var value = stringifyJSON(obj[c]);
      var keyPair;
      if (value === '') { 
        keyPair = ''; 
      } else {
        keyPair = stringifyJSON(c) + ':' + value;
      }
      if (p.length > 0 && keyPair.length > 0) {
        return p + ',' + keyPair;
      }
      return keyPair;
    }, '');
    return '{' + keyPairs + '}';
  }
  if (obj === undefined || typeof obj === 'function') {
    return '';
  }
  return '' + obj;
};
