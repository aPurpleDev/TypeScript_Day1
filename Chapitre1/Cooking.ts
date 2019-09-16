class Recipe {
    private _name: string;
    private _star?: number;


    constructor(name: string = "Une recette par défaut", star?: number) {
        this._name = name;
        this._star = star;
    }

    get name(): string {
        return this._name;
    }

    get star(): number {
        return this._star;
    }
}

let recipe1 = new Recipe;
let recipe2 = new Recipe("Un nom de recette personnalisé");
let recipe3 = new Recipe("Un autre nom de recette personnalisé", 3);

let recipes: Recipe[] = [];// Array<Recipe> ~ Recipe[]

recipes.push(recipe1,recipe2,recipe3);

console.log(recipes);