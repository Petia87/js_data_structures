export class List {
    constructor() {
        this._data = []
    }
    add(value) {
        this._data.push(value)

    }
    adds(...value) {
        this._data.push(...value)

    }
    get(index) {
        return this._data[index]

    }
    count() {
        return this._data.length

    }
    clear() {
        return this._data = []
    }
    includes(value) {
        return this._data.includes(value)
    }
    reverse() {
        return this._data.reverse
    }
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