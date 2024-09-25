/**
 * @param {string} s
 * @return {boolean}
 */
var isValid=(s)=> {
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
    return stack.length === 0;
}
console.log(isValid("()"));
module.exports = { isValid };