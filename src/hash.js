export class HashTable {
    constructor(size = 10) {
        this.array = new Array(size);
        this.size = size;
    }

    //1.Create hash 

    hash(key) {
        return key.toString().length % this.size;
    }


    //2.  setItemс 
    setItem(key, value) {
        let index = this.hash(key);

        if (!this.array[index]) {
            this.array[index] = [];
        }

        this.array[index].push([key, value])
        return index
    }

    //3.  getItem 
    getItem(key) {
        let index = this.hash(key);

        if (!this.array[index]) {
            return null
        }

        for (let table of this.array[index]) {
            // key
            if (table[0] === key) {
                // value
                return table[1]
            }
        }
    }

    4// create _hash
    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % this.table.length;?????
    }


   5//set colizia
    set(key, value) {
        const index = this._hash(key);
        if (this.table[index]) {
            for (let i = 0; i < this.table[index].length; i++) {
                // Find the key/value pair in the chain
                if (this.table[index][i][0] === key) {
                    this.table[index][i][1] = value;
                    return;
                }
            }
            // not found, push a new key/value pair
            this.table[index].push([key, value]);
        } else {
            this.table[index] = [];
            this.table[index].push([key, value]);
        }
        this.size++;
    }
    6// get colizia
    get(key) {
      const target = this._hash(key);
      if (this.table[target]) {
        for (let i = 0; i < this.table.length; i++) {
          if (this.table[target][i][0] === key) {
            return this.table[target][i][1];
          }
        }
      }
      return undefined;
    }

}

