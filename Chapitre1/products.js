// définition de la classe
var Product = /** @class */ (function () {
    function Product(name, __ref) {
        if (__ref === void 0) { __ref = 7; }
        this._name = name;
        this._ref = __ref;
    }
    Object.defineProperty(Product.prototype, "name", {
        // getter
        get: function () {
            return this._name;
        },
        // setter
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Product.prototype, "ref", {
        get: function () {
            return this._ref;
        },
        set: function (value) {
            this._ref = value;
        },
        enumerable: true,
        configurable: true
    });
    return Product;
}());
var bike = new Product('Super Bike');
console.log("name :" + bike.name + ", ref : " + bike.ref);
bike.ref = 3;
console.log("name :" + bike.name + ", ref : " + bike.ref);
