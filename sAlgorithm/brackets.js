import { Stack } from "../src/Stack.js"


export const brackets = function (input) {
    let stack = new Stack()

    for (let i = 0; i < input.length; i++) {
        let element = input[i];
        if (element === "(") {
            stack.push(element)
        }
        if (element === ")") {
            if (stack.peek() === "(") {
                stack.pop()
            } else {
                console.log("Issue with () Failed1");
                return false

            }

        }
    }
    if (stack.length() !== 0) {
        console.log("Issue with () Failed2");
        return false
    } else {
        console.log("No issues found with ()");
        return true
    }
}


