var Recipe = /** @class */ (function () {
    function Recipe(name, star) {
        if (name === void 0) { name = "Une recette par défaut"; }
        this._name = name;
        this._star = star;
    }
    Object.defineProperty(Recipe.prototype, "name", {
        get: function () {
            return this._name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Recipe.prototype, "star", {
        get: function () {
            return this._star;
        },
        enumerable: true,
        configurable: true
    });
    return Recipe;
}());
var recipe1 = new Recipe;
var recipe2 = new Recipe("Un nom de recette personnalisé");
var recipe3 = new Recipe("Un autre nom de recette personnalisé", 3);
var recipes = []; // Array<Recipe> ~ Recipe[]
recipes.push(recipe1, recipe2, recipe3);
console.log(recipes);
