export class HashS {
    constructor() {

        this.array = []

    }

  

    hash(key) {
        return key.toString().length % this.array.length;
    }


  
    setItem(key, value) {
        let index = this.hash(key);

        if (!this.array[index]) {
            this.array[index] = [];
        }

        this.array[index].push([key, value])
        return index
    }

   
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
}
