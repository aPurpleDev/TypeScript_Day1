var Thing = /** @class */ (function () {
    function Thing(name) {
        if (name === void 0) { name = "Default Name"; }
        this.name = name;
    }
    Thing.prototype.swim = function () {
        return "I'm swimming";
    };
    return Thing;
}());
var aThing = new Thing;
console.log(aThing.swim());
