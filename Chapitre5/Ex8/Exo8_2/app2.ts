function readonly(target, key, descriptor) {
    descriptor.writable = false;

    return descriptor;
}

function modify(model: string) {
    let newModel = model;

    return function (target, key, descriptor) {
        descriptor.value = () => newModel;
    };
}

class Bike {

    @readonly
    speed() {
        return 8;
    }

    @modify('electric')
    model() {
        return 'normal';
    }
}

function Feature(config)
{
    return function(target)
    {
        Object.defineProperty(target.prototype,'swim',{value : () => config.action}
        );
    }
}

@Feature({
    action: "Nage comme un canard"
})

class Duck{
    say() {return "Je suis un oiseau"; }
    swim() {return "Je nage"; }
}

let duck = new Duck;
duck.say();

/*
let bike2 = new Bike;
bike2.speed = () => 5;
console.log(bike2.speed());
console.log(bike2.model());*/
