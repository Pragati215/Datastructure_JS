/**************************************************************
* @problem : To check if the parentheses are balanced or not.
* @param : enter string
* @author :Pragati Dhakane
* returning balance or not balanced.
**************************************************************/

// class defined & exported to main logic

class Paranthesis {

    isParenthesisMatching(str) {
        let stack = [];
        let map = {
            '(': ')', '[': ']', '{': '}'
        }

        for (let i = 0; i < str.length; i++) {

            if (str[i] === '(' || str[i] === '{' || str[i] === '[') {
                stack.push(str[i]);
            }

            else {
                let last = stack.pop();
                if (str[i] !== map[last]) {
                    return false;
                }
            }
        }

        if (stack.length !== 0) {
            return "Parenthesis Not Balanced";
        }
        return "Parenthesis Balanced";
    }
}
module.exports = new Paranthesis;