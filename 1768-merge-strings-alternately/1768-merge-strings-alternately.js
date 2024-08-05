/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    let result = ''
    const max = Math.max(word1.length, word2.length)
    for (let i = 0; i < max; i++) {
        let str1 = word1[i] || ''
        let str2 = word2[i] || ''
        result += (str1 + str2)
    }
    return result
};