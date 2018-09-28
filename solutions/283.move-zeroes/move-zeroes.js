/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    for(var i = 0; i < nums.length; i++) {
        if (nums[i] === 0) {
            nums[i] = null;
        }
    }
    for(var j = 0; j < nums.length; j++) {
        if (nums[j] === null) {
            nums.splice(j, 1);
            nums.push(0);
            j--;
        }
    }
    // return nums;
};
