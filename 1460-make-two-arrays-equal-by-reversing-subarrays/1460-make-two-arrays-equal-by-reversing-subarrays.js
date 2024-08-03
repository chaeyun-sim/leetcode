/**
 * @param {number[]} target
 * @param {number[]} arr
 * @return {boolean}
 */
var canBeEqual = function(target, arr) {
    const str1 = target.sort((a, b) => a - b).join('')
    const str2 = arr.sort((a, b) => a - b).join('')
    
    return str1 === str2
};