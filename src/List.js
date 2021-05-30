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

    test3
    addMany(...value) {
        this._data.push(...value)

    }

    //test4
    clear() {
        this._data = []
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
        this._data.reverse()
    }

    //test8
    length(value) {
       this._data.length(value)
    }
}
//var obj=new List()
//obj.add(50)
//obj.get(5)