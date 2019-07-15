/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x >= 0) {
        let reverse = parseInt(x.toString().split('').reverse().join(''))
        if (x === reverse) {
            return true

        } else return false

    } else return false
};


isPalindrome(131)