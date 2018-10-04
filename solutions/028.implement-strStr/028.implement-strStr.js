/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  var needLen = needle.length;
  var tempStr = '';
  if (needLen === 0) return 0; 
  for(var i = 0; i <= haystack.length - needLen; i++) {
    if (haystack[i] === needle[0]) {
      tempStr = haystack.slice(i, i + needLen);
      if (tempStr === needle) {
        return i;
      }
    }
  }
  return -1;
};
