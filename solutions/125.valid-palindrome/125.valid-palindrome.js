/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  var newStr = s.toLocaleLowerCase();
  var resultStr = '';
  for (var i = 0; i < newStr.length; i++) {
    if ((newStr[i].charCodeAt() >= 97 && newStr[i].charCodeAt() <= 122) || (newStr[i].charCodeAt() >= 48 && newStr[i].charCodeAt() <= 57)) {
      resultStr += newStr[i];
    }
  }
  if (resultStr === resultStr.split('').reverse().join('')) {
    return true;
  } else {
    return false;
  }
};
