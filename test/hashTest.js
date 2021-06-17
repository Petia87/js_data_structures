import { HashTable } from "../src/hash.js"
import { assert } from "chai"


describe("HashTable", function () {
    let ht;
    beforeEach(() => {
        ht = new HashTable()
    })

    it('setItem', function () {
        ht.setItem("Canada", 10);
        ht.setItem("petia", 5);

        assert.equal(ht.setItem("Canada", 300), 6)
        assert.equal(ht.setItem("petia", 5), 5)
    })

    it('getItem', function () {
        ht.setItem("petia", 5);
        let result = ht.getItem("petia")
        assert.equal(result, 5)
    })

   it('set', function () {
        ht.set("ani",1);
        ht.set("ina",1);
        console.log( ht.get("ani", 1));
        //  console.log( ht.set("ina", 1));
        //assert.equal(ht.setItem("Canada", 300), 6)
        // assert.equal(ht.setItem("petia", 5),5)     

    })








})