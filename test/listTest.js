import { List } from "../src/List.js "
import { assert } from "chai"

describe("Array", function () {
    let list;
    beforeEach(() => {
        list = new List()
    })
    it('testA', function () {
        assert.equal(5, 5)
    })
    it('test1', function () {
        list.add(5)
        assert.equal(list.get(0), 5)
    })

    it('test2', function () {
        list.add(5)
        list.add(5)
        assert.equal(list.count(), 2)
    })

    /*it('test3', function () {
        list.add(5)
        list.add(5)
        list.add(5)
        assert.equal(list.adds(), list.length = 3)
    })
    */

    it('test4', function () {
        list.add(5)
        list.add(5)
        assert.equal(list.clear(), list.length = 0)
    })
    it('test5', function () {
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        assert.equal(list.get(0), 1)
    })

    /* it('test6', function () {
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        assert.ok(list.includes(2), 'true')

    })
    it('test7', function () {
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        assert.equal(list.reverse(), [4,3,2,1])

    })*/
    it('test8', function (value) {
        list.add(1)
        list.add(2)
        
        assert.equal(list.remove(1), 2)
    })

    it('test9', function (value) {
        list.add(1)
        list.add(2)
        list.add(3)
        list.add(4)
        assert.equal(list.remove(1), list.length = 3)
    })
})





/*var list = new List()
list.add(7)
const result = list.get(0)
if (result == 7) {
    console.log("work");
    console.log(result);
} else {
    console.log("error");
     list.add(5)
    const result=list.get(0)
}*/