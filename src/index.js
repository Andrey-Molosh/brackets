module.exports = function check(str, bracketsConfig) {
    const stack= [];
    const openBrackets = [];
    const closeBrackets = [];

    if (str.length % 2 !== 0) {
        return false;
    }

    for (let i = 0; i < bracketsConfig.length; ++i) {
        openBrackets.push(bracketsConfig[i][0]);
        closeBrackets.push(bracketsConfig[i][1]);

        const openCount = str.split('').filter(x => x === bracketsConfig[i][0]).length;
        const closeCount = str.split('').filter(x => x === bracketsConfig[i][1]).length;
        if (openCount !== closeCount) {
            return false;
        }
    }

    for (let i = 0; i < str.length; ++i) {
        
        if (stack.Length === 0 && closeBrackets.indexOf(str[i]) !== -1 && (openBrackets.indexOf(str[i]) !== closeBrackets.indexOf(str[i]))) {
            return false;
        } else if (
            (openBrackets.indexOf(stack[stack.length - 1]) !== -1) &&
            (openBrackets.indexOf(stack[stack.length - 1]) === closeBrackets.indexOf(str[i]))) {
            stack.pop();
            } else  stack.push(str[i]);
    }

    return stack.length === 0;



}
