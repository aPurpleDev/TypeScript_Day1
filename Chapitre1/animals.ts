interface Duck{
    name : string;
    swim(): string;
}

class Thing implements Duck{

    name : string;

    constructor(name: string = "Default Name")
    {
        this.name = name;
    }

    swim()
    {
        return "I'm swimming";
    }
}

let aThing = new Thing;
console.log(aThing.swim());