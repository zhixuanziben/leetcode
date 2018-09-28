/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
  if (nums.length <= 1) {
    return nums;
  }
  for(var i = 0; i < nums.length; i++) {
    for (var j = 0; j < nums.length; j++) {
       if (nums[i] === nums[j] && i !== j) {
         nums.splice(j, 1);
         j--;
      }
    }
  }
  return nums.length;
};
