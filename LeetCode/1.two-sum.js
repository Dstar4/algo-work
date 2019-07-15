/*
 * @lc app=leetcode id=1 lang=javascript
 *
 * [1] Two Sum
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // console.log(nums)
    for (let i = 0; i <= nums.length; i++) {
        for (let k = 0; k <= nums.length; k++) {
            console.log(i, k)
            console.log(nums[ i ], nums[ k ])
            if (k !== i && nums[ k ] + nums[ i ] === target) {
                return [ i, k ]
            }
        }
    }
}



console.log(twoSum([ 2, 7, 11, 15 ], 9))
