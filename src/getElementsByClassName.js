// If life was easy, we could just do things the easy way:
// var getElementsByClassName = function (className) {
//   return document.getElementsByClassName(className);
// };

// But instead we're going to implement it from scratch:
var getElementsByClassName = function(className) {
  // your code here
  var searchForClass = function (element) {
    var result = [];
    // Search this element's classes
    if (element.classList) {
      if (_.any(element.classList, (name) => name === className)) {
        result.push(element);
      }
    }	
    // Search this element's children
    if (element.childNodes.length > 0) {
      element.childNodes.forEach(function (childNode) {
        result = result.concat(searchForClass(childNode));
      });
    }
    // Search results of this element and children(if any)
    return result;
  };

  return searchForClass(document.body);
};
