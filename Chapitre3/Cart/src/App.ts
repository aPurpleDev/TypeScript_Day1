// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier

import {Product} from "./Product.js";
import {Delivery} from "./data/MockProducts";

let deliveries = Delivery;

function mapDeliveries() {
    for (let deliveriesVal in deliveries) {
        if (deliveriesVal == 'Special') {
            console.log(deliveriesVal);
            return deliveriesVal;
        }
    }
}

// deliveries.forEach((d) =>
// if (!(d.delivery = 'special')) {
//     return d;
// });