/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    // III = 3 // LVIII = 58 // MCMXCIV = 1994
    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };

    let total = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanNumerals[s[i]]; // 1
        const next = romanNumerals[s[i + 1]]; // 5

        if (current < next) {
            // 1 < 5
            total -= current; // 0 - 1 = -1
        } else {
            total += current; // 0 + 1 = 1
        }
    }

    return total; // 4
};
module.exports={romanToInt}
