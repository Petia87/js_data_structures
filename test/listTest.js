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

        / it('test3', function () {
            list.addMany(5, 5, 5) //no return

            assert.equal(list.count(), 3)
        })


    it('test4', function () {
        list.add(5)
        list.clear() //no return
        assert.equal(list.count(), 0)
    })
    it('test5', function () {
        list.add(1)
        list.add(2)
        assert.equal(list.get(0), 1)
    })

    it('test6', function () {
        list.add(1)
        list.add(2)
        assert.ok(list.includes(2))

    })

    it('test7', function () {

        list.add(1)//arrange
        list.add(2)
        list.reverse()//act //no return
        assert.equal(list.get(0), 2)//assert
    })
    it('test8', function () {

        list.length(5,5,5,5)
        
        assert.equal(list.count(), 4)//assert
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
})