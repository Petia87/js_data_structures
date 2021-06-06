import { Stack } from "../src/Stack.js"
import { assert } from "chai"


describe("Stack", function () {
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
        stack.push(3)
        console.log(stack);
        assert.equal(stack.length(3), 3);

    })
    it('peek', function () {
        stack.push(1)
        stack.push(2)
        stack.push(3)
        assert.equal(stack.peek(), 3)

    })
    it('isEmpty', function () {
        stack.push(1)
        stack.pop()
      
       
        console.log(stack);
        assert.equal(stack.isEmpty())

    })

})