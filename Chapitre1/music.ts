abstract class Music
{
    protected _instrument: string = 'nothing';

    play(): string {
        return "play music";
    }

    abstract makeSound():string;
}

class Guitar extends Music
{
    private _nom;

    constructor(_nom: string = "Nothing")
    {
        super();
        this._nom = _nom;
    }

    get nom() {
        return this._nom;
    }

    makeSound()
    {
    return "I'm making a sound !";
    }
}

let aGuitar = new Guitar;
console.log(`Nom:  ${aGuitar.nom}.`);
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
