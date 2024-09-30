/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const d = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    let ans = d[s[s.length - 1]]; // Start with the value of the last Roman numeral
    for (let i = 0; i < s.length - 1; ++i) {
        const sign = d[s[i]] < d[s[i + 1]] ? -1 : 1; // Determine if we should add or subtract
        ans += sign * d[s[i]];
    }
    return ans;
};

module.exports = { romanToInt };
