/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
    let count = 0;
    let i = 0;
    
    while (i < flowerbed.length) {
        if (flowerbed[i] === 1) {
            i++;
            continue;
        }

        let prevEmpty = (i === 0 || flowerbed[i - 1] === 0);
        let nextEmpty = (i === flowerbed.length - 1 || flowerbed[i + 1] === 0);
            
        if (prevEmpty && nextEmpty) {
            count++;
            i += 2;
        } else {
            i++;
        }
    }
    
    return count >= n;
};