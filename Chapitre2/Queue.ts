class Queue<T> {

    private _attr: T[];

    constructor(attr: [] = []) {
        this._attr = attr;
    }

    get attr(): T[] {
        return this._attr;
    }

    set attr(value: T[]) {
        this._attr = value;
    }

    push(param : T)
    {
     this.attr.push(param);
    }

    pop()
    {
        let popped = this.attr[0];
        this.attr.splice(0,1);

        return popped;
    }
}

let queue = new Queue<number>();

queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop());