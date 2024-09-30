/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    // A stack to store opening brackets
    let stack = [];
    // A map to match the closing bracket with its corresponding opening bracket
    const map = {
        ')': '(',
        '}': '{',
        ']': '['
    };
    
    // Iterate through each character in the string
    for (let i = 0; i < s.length; i++) {
        let char = s[i];
        
        // If it's a closing bracket
        if (map[char]) {
            // Pop the top element from the stack if it's not empty, else use a dummy value
            let topElement = stack.length ? stack.pop() : '#';
            
            // If the popped element doesn't match the corresponding opening bracket
            if (topElement !== map[char]) {
                return false;
            }
        } else {
            // It's an opening bracket, push it onto the stack
            stack.push(char);
        }
    }
    
    // If the stack is empty, all brackets were matched
    return stack.length === 0;



};
// Example usage:
console.log(isValid("()"));       // Output: true
console.log(isValid("()[]{}"));   // Output: true
console.log(isValid("(]"));       // Output: false
    
module.exports = { isValid };


