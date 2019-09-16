class Recipe {
    constructor(name = "Une recette par défaut", star) {
        this._name = name;
        this._star = star;
    }
    get name() {
        return this._name;
    }
    get star() {
        return this._star;
    }
}
let recipe1 = new Recipe;
let recipe2 = new Recipe("Un nom de recette personnalisé");
let recipe3 = new Recipe("Un autre nom de recette personnalisé", 3);
let recipes = []; // Array<Recipe> ~ Recipe[]
recipes.push(recipe1, recipe2, recipe3);
console.log(recipes);
