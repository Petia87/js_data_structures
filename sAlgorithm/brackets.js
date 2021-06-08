import { Stack } from "../src/Stack.js"


export const brackets = function (input) {
    let stack = new Stack()
    /*input = `describe("Stack", function () {
    let stack;
    beforeEach(() => {
        stack = new Stack()
    })

    it('push', function () {
        stack.push(5)
        console.log(stack);
        assert.equal(stack.peek(0), 5)

    })
    it('pop', function () {
        stack.pop()
        console.log(stack);
        assert.equal(stack.length(0), 0)

    })

    it('lenght', function () {
        stack.push(1)
        stack.push(2)
        console.log(stack);
        assert.equal(stack.length(2), 2);

    })
    it('peek', function ()) {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        assert.equal(stack.peek(), 3)

    })
    it('isEmpty', function () {
        stack.push(1)
        stack.pop()     
        console.log(stack);
        assert.isTrue(stack.isEmpty())

    })
    it('toString', function () {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        assert.equal(stack.toString(), "1,2,3")

    })

})`*/
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


