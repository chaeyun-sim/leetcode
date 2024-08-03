/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) return strs[0]
    if (strs.length === 0) return ''

    let current = 0
    let prev = ''
    while (current < Math.max(...strs.map(el => el.length))) {
        const arr = strs.map(str => str.slice(0, current + 1))
        if (arr.every(el => el === arr[0])) {
            prev = arr[0]
            current++
        } else {
            return prev
        }
    }

    return prev
};