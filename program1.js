/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var isValid = function(s) {
        const stack = [];
        const parenthesesMap = {
            '(': ')',
            '{': '}',
            '[': ']'
        };
    
        for (let char of s) {
            if (parenthesesMap[char]) {
                stack.push(char);
            } else {
                if (stack.length === 0 || parenthesesMap[stack.pop()] !== char) {
                    return false; 
                }
            }
        }
    };
};

module.exports = { isValid };


