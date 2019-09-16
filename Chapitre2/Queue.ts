class Queue<T> { //classe d'objet à typer à l'instanciation

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

/* La correction


class Queue<T> {
    private _elems: T[] = [];

    push(elem: T): void {
        this._elems.push(elem);
    }

    pop(): T {
        if(this._elems)
            return this._elems.shift();

        throw "empty queue";
    }

    // getter
    get elem(): T[] { return this._elems; }
}

let queue = new Queue<number>();
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
console.log(queue.pop()); // affiche 1

// Vous pouvez définir un type Array<number> pour T
let queueArray = new Queue<Array<number>>();
queueArray.push([1, 2]);
queueArray.push([3, 4]);
queueArray.push([5, 6]);
queueArray.push([7, 8]);

// produit une erreur car le type n'est pas respecté
// queueArray.push("elem");
console.log(queueArray.pop()); // affiche [1,2]

 */