import { List } from "../src/List.js "
import { assert } from "chai"
import { performance } from "perf_hooks";

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

    it('test3', function () {
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
        list.add(1)//arrange
        list.add(2)
        list.add(3)
        list.add(4)
        list.removeNum(2)//act 
        assert.ok(list.includes(3))//assert
    })
    it('test9', function () {
       
            list.add(1)//arrange
            list.add(2)
            list.add(3)
            list.add(4)
            const t1 = performance.now()
            list.find(4)//act 
            const t2 = performance.now()
            const time = t2 - t1
            assert.isTrue(time < 15)
            assert.ok(list.includes(4))//assert

    })

    it("time", function () {
      
        list.addMany(1,2,3,4,5,6)
        const t1 = performance.now()
        list.find(4)//act 
        const t2 = performance.now()
        const time = t2 - t1
        assert.isTrue(time < 15)
    })
    

})


