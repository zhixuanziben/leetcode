/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    for (var i = 0; i < nums.length; i++) {
      for (var j = 0; j < nums.length; j++) {
        if (nums[i] < nums[j] && i !== j) {
          var numsi = nums[i];
          nums[i] = nums[j];
          nums[j] = numsi;
        }
      }
    }
};
