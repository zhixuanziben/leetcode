/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  nums1.splice(m, nums1.length - m);
  nums2.splice(n, nums2.length - n);
  for (var z = 0; z < nums2.length; z++) {
    nums1.push(nums2[z]);
  }
  for (var i = 0; i < nums1.length; i++) {
      for (var j = 0; j < nums1.length; j++) {
        if (nums1[i] < nums1[j] && i !== j) {
          var numsi = nums1[i];
          nums1[i] = nums1[j];
          nums1[j] = numsi;
        }
      }
    }
};
