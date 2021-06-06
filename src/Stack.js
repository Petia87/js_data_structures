export class Stack {
    constructor() {
        this._dataArray = []
        this.count = 0
    }

    //push
    push(element) {
        this._dataArray[this.count] = element
        this.count += 1
        return this.count - 1

    }

    //pop()
    pop() {
        if (this.isEmpty() === false) {
            this.count = this.count - 1;
            return this._dataArray.pop(); // removes the last element
        }
    }

    //length
    length() {
        return this.count;
    }


    //peek()надникнете
    peek() {
        return this._dataArray[this.count - 1]
    }

    //empty
    isEmpty() {
        return this.count === 0
    }
    //count
    toString() {
        let str = ""
        for (let i = 0; i < this.count; i++) {
            str += this.count[i] + "";

        }
    }
}
