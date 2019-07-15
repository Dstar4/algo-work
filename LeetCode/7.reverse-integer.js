/*
 * @lc app=leetcode id=7 lang=javascript
 *
 * [7] Reverse Integer
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
    let newArr = x.toString().split('')
    if (newArr[ 0 ] === '-') {
        newArr.shift()
        newArr.reverse().join('')
        newArr.unshift('-')
        let next = newArr.join('')
        return next > 2 ** 31 || next < -(2 ** 31) ? 0 : next
    } else {
        let next = newArr.reverse().join('')
        return next > 2 ** 31 || next < -(2 ** 31) ? 0 : next
    }
}
