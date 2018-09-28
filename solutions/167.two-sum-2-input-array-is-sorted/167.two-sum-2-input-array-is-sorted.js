/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var dict = {}
    for (var i = 0; i < nums.length; i++) {
        if (dict[nums[i]] !== undefined){
            return [dict[nums[i]] + 1, i + 1];
        } else {
            dict[target-nums[i]] = i;
        }
    }
    return []
};
