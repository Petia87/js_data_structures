export class List {
    constructor() {
        this._data = []
    }
    //test1
    add(value) {
        this._data.push(value)
    }

    //test2
    count() {
        return this._data.length
    }

    //test3
   adds(...value) {
        this._data.push(...value)

    }
    
   //test4
    clear() {
        return this._data = []
    }
    //test5
    get(index) {
        return this._data[index]
    }
    
    //test6
    includes(value) {
        return this._data.includes(value)
    }
    //test7
    reverse() {
        return this._data.reverse
    }
    //test 8 i9
    remove(value) {
        return this._data.remove(value)
    }
    find(value) {
        return this._data.find(value)
    }
}
//var obj=new List()
//obj.add(50)
//obj.get(5)