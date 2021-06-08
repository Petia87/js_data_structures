export class Queues {
    constructor() {
        this._data = []
          }

    //enqueue
    enqueue(element) {
        this._data.push(element)
       

    }

    //dequeue()
    dequeue() {
        if (this.isEmpty() === false) {
           return this._data.shift(); // removes the first element
        }
    }

    //isEmpty
    isEmpty() {
        // return true if the queue is empty
        return this._data.length === 0
    }
    
}
