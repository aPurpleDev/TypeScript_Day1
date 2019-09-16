class Queue {
    constructor(attr = []) {
        this._attr = attr;
    }
    get attr() {
        return this._attr;
    }
    set attr(value) {
        this._attr = value;
    }
    push(param) {
        this.attr.push(param);
    }
    pop() {
        let popped = this.attr[0];
        this.attr.splice(0, 1);
        return popped;
    }
}
function isIterable(obj) {
    // checks for null and undefined
    if (obj == null) {
        return false;
    }
    return typeof obj[Symbol.iterator] === 'function';
}
let queue = new Queue();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop());
