/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  var isLessZero = false;
  if (x < 0) {
    isLessZero = true;
  }
  var str = Math.abs(x).toString();
  var newStr = '';
  for (var i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  if (parseInt(newStr) >= 2147483648) {
      return 0;
  }
  if (isLessZero) {
    newStr = '-' + newStr;
  }
 
  return parseInt(newStr);
};
