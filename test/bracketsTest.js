import { brackets } from "../sAlgorithm/brackets.js"
import { assert } from "chai"


describe("Brackets", function () {
      
       it('test1', function () {
        brackets("")
    })
     it('test2', function () {
         let missingBrackets=brackets(`1234(123`)
         //console.log(missingBrackets);
         assert.equal(missingBrackets, false)
 
     })
     
     it('test3', function () {
        let missingBrackets=brackets(`1234123`)
         assert.equal(missingBrackets, true)

    })
    it('test4', function () {
        let missingBrackets=brackets(`12(3)4123`)
         assert.equal(missingBrackets, true)

    })


   // test3red 64
   //test 4 red 72

})