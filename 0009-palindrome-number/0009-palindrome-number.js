/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    const str = String(x)

    return str === [...str].reverse().join('')
};