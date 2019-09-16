function readonly(target, key, descriptor)
{
    descriptor.writable = false;

    return descriptor;
}

class Bike
{
    @readonly //readonly, donc pas de modif de la fonction, et pas d'erreur levée
    speed(){
        return 8;
    }
}

let bike = new Bike;

bike.speed = function(){

 return 5;
}

console.log(bike.speed());