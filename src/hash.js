export class Hash{
    constructor() {
        this.size = 7
        this.array = new Array(this.size).fill(null);
        this.length = 0;
        console.log(this.array);
    }
    
      _hash(key, size) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash += key.charCodeAt(i);
        }
        return hash % size
    }


    set(key, value) {
        const index = this._hash(key);
        if (!this.array[index]) {//if arau is empry
            this.array[index] = [[key, value]]
            this.length++; // increase length size
        } else
            let isKeyUpdated = false;
        // get all keys on a hashIndex and loop over
        const arrKeys = this.array[index];
        for (let i = 0; i < arrKeys.length; i++) {
            // if key found, replace its value
            if (arrKeys[i][0] === key) {
                arrKeys[i][1] = value;
                isKeyUpdated = true;
            }
        }
        // if same Key does not exist, push new [Key value]
        if (!isKeyUpdated) {
            this.values[hashIndex].push([key, value]);
            this.length++; // increase length size
        }
    }


 
    get(key) {
        const index = this._hash(key);
        const slot = this.array[index]
        if (!slot) {       //if is empty
            return false
        } else {
            for (let i = 0; i < slot.length; i++) {
                // compare key
                if (slot[index][i][0] === key) {
                    //return value
                    return this.array[index][i][1];
                }
            }
        }
    }
    remove(key) {
        let index = this._hash(key);
        let slot = this.array[index]
        if (!slot) {
            return false;
        } else {
            for (let i = 0; i < slot.length; i++) {
                // Find the element in the chain
                if (slot[i][0] === key) {
                    slot.splice(i, 1);
                    return true
                }
            }
        }
    }
}


let ht = new HashTable()
ht.set(pr, 94);
ht.set(pt, 1);
ht.set(tf, 6);
ht.set(gf, 21);
ht.set(g5, 34);

console.log(ht.get(pr));

console.log(ht.get(tf));
