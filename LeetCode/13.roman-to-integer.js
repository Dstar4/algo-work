/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 */
/**
 * @param {string}
 * @return {number}
 */
function romanToInt(s) {

    const DIGIT_VALUES = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    const input = s.split('');

    for (let i = 0; i < input.length; i++) {
        let currentLetter = DIGIT_VALUES[ input[ i ] ];
        let nextLetter = DIGIT_VALUES[ input[ i + 1 ] ];
        if (currentLetter === undefined) {
            return 'null';
        } else {
            if (currentLetter < nextLetter) {
                result += nextLetter - currentLetter;
                i++;
            } else {
                result += currentLetter;
            }
        }
    };

    return result;
}
