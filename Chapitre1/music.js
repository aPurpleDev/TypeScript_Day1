var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Music = /** @class */ (function () {
    function Music() {
        this._instrument = 'nothing';
    }
    Music.prototype.play = function () {
        return "play music";
    };
    return Music;
}());
var Guitar = /** @class */ (function (_super) {
    __extends(Guitar, _super);
    function Guitar(_nom) {
        if (_nom === void 0) { _nom = "Nothing"; }
        var _this = _super.call(this) || this;
        _this._nom = _nom;
        return _this;
    }
    Object.defineProperty(Guitar.prototype, "nom", {
        get: function () {
            return this._nom;
        },
        enumerable: true,
        configurable: true
    });
    Guitar.prototype.makeSound = function () {
        return "I'm making a sound !";
    };
    return Guitar;
}(Music));
var aGuitar = new Guitar;
console.log("Nom:  " + aGuitar.nom + ".");
console.log(aGuitar.makeSound());
/*
Solution exercice précédent
class Music
{
    protected _instrument: string = 'nothing';

    play(): string {
        return "play music";
    }
}

class Guitar extends Music
{
    private _nom;

    constructor(_nom: string = "Guitar folk")
    {
        super();
        this._nom = _nom;
    }
}

let aGuitar = new Guitar();
console.log(`Nom:  ${aGuitar.nom}.`);*/
