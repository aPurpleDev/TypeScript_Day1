# TypeScript_Day1
A series of exercises to get familiar with TypeScript

#Instructions (French)

Chapitre 1

En TypeScript, écrivez le code qui suit dans un fichier product.ts :

// définition de la classe
class Product {
private _name: string;
constructor(name: string) {
this._name = name;
}
// setter
set name(name: string) {
this._name = name;
}
// getter
get name(): string {
return this._name;
}
}

// instance de la classe
let bike = new Product('Super Bike');

Exercice 1

Ajoutez un attribut _ref, puis faites en sorte que le code ci-dessous s’exécute
correctement :

let bike = new Product('Super Bike');
console.log(`name :${bike.ref}, ref : ${bike.ref}`)

Exercice 2

Soient les classes suivantes. 
Définissez dans la classe Guitar le nom de l’instrument
“Guitar folk” à l’aide de l’attribut : _instrument. Puis testez en console le code
en affichant, par exemple, le nom de l’instrument à partir d’une instance de la
classe Guitar :

class Music {
protected _instrument: string = 'nothing';

play(): string {
return "play music";
}
}

class Guitar extends Music{
// définissez ici le nom de l'instrument
}

Reprenez le code de la classe Music, maintenant cette classe est abstraite.
Implémentez le code dans la classe Guitar pour que celle-ci soit correctement
définie.

abstract class Music {
protected _instrument: string = 'nothing';
abstract makeSound():string;
play(): string {
return "play music";
}

}
class Guitar extends Music{
// Implémentez le code utile
}

let guitar = new Guitar;

console.log(guitar.instrument);
console.log(guitar.makeSound());

Remarques : une classe est dite abstraite lorsqu’au moins une méthode dans
celle-ci est définie comme abstraite. Une classe abstraite ne peut être instanciée,
mais peut comporter du code métier (code qui retourne ou fait quelque chose
dans ses méthodes).

Exercice 3

Soit l’interface Duck suivante et soit la classe Thing qui implémente l’interface
Duck. Complétez le code dans la classe Thing pour que celle-ci soit correctement
définie.

Remarque : Il ne faut pas préciser la visibilité des méthodes d’une interface, par
définition elles ont toutes la visibilité publique.
Testez votre code en affichant en console une chaîne de caractères renvoyée par
la méthode swim().

// définition de l'interface <=> contrat
interface Duck{
name : string ;
swim(): string;
}

class Thing implements Duck{
}

Rappels

Une interface ou une classe permet également de définir des types en TypeScript
:

// Type Recipe
class Recipe{
name : string;
star? : number; // attribut facultatif
}

let recipes = Recipe[] = [];

// Type Bike
interface Bike{
name : string;
type : string;
}

let bikes = Bike[];

Exercice 4

Soit la définition de la classe Recipe suivante. Ajoutez quelques recettes dans la
variable recipes, puis affichez les valeurs de la variable recipes en console.

class Recipe {
name: string;
star?: number; // ?NameAttribut <=> attribut facultatif
}

let recipes: Recipe[] = [];// Array<Recipe> ~ Recipe[]

