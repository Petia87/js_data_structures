export class HashTable {
    constructor() {
        this.array = [];

        this.array.push([])
        this.array.push([])
        this.array.push([])
        this.array.push([])
        this.array.push([])
    }

    // create hash
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % 5;
    }


    //  set
    set(key, value) {
        let index = this._hash(key)
        this.array[index].push({
            currentKey: key,
            currentValue: value
        })
    }

    // get
    get(key) {
        let index = this._hash(key);
        let resultObj = this.array[index].find((obj) => {
            if (obj.currentKey === key) {
                return true
            }
        })
        if (resultObj) {
            return resultObj. currentValue
        }
    }

}
let ht = new HashTable()
ht.set("10", 94);
ht.set("30", 1);
ht.set("21", 6);
ht.set("15", 21);
ht.set("32", 34);

console.log(ht.get("10"));

console.log(ht.get("32"));

