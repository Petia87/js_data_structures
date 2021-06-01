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
    removeFirst(count) {
        this._data.slice(count)
    }
    //test9
    find(searchedNumber) {
        for (const element of this._data) {
            if (element.number === searchedNumber) {
                return element
            }
        }

    }

    //test 10
    sort() {

        for (var i = 0; i < this._data.length; i++) {
            for (var j = 0; j < this._data.length; j++) { // this was missing
                const firstElement = this._data[j];
                const secondElement = this._data[j + 1];
                if (!secondElement===-1) {
                    break
                }
                if (firstElement > secondElement) {
                    // swap
                    this._data[j] = secondElement
                    this._data[j + 1] = firstElement
                }
            }
        }
    }


}
//var obj=new List()
//obj.add(50)
//obj.get(5)