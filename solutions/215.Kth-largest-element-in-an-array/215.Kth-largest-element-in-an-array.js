/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  if (k < 1 || k > nums.length) {
    return null;
  }
  for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
        if (nums[i] < nums[j] && i !== j) {
          var numsi = nums[i];
          nums[i] = nums[j];
          nums[j] = numsi;
        }
      }
    }
  return nums[nums.length - k]
};
