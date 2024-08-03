/**
 * @param {string} s
 * @return {string}
 */
var freqAlphabets = function(s) {
    const arr = new Array(26)
    .fill(0)
    .map((_, i) => i < 9 ? `${i + 1}` : `${i + 1}#`)

    let result = ''
    let current = 0
    while (current < s.length) {
        let num = 0
        if (s[current + 2] === '#') {
            num = Number(s.slice(current, current + 2))
            current += 3
        } else {
            num = Number(s[current])
            current++
        }
        result += String.fromCharCode(num + 96)
    }

    return result
};