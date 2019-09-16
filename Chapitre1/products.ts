// définition de la classe
class Product {

    private _name: string;
    private _ref: number;

    constructor(name: string, __ref: number = 7) {
        this._name = name;
        this._ref = __ref;
    }
// setter
    set name(name: string) {
        this._name = name;
    }
// getter
    get name(): string {
        return this._name;
    }

    get ref(): number {
        return this._ref;
    }

    set ref(value: number) {
        this._ref = value;
    }
}

let bike = new Product('Super Bike');
console.log(`name :${bike.name}, ref : ${bike.ref}`);

bike.ref = 3;
console.log(`name :${bike.name}, ref : ${bike.ref}`);