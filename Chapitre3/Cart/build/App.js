"use strict";
// Importez les bons fichiers et définition et une fois que vous avez récupérez tous les products mappez ce dernier
Object.defineProperty(exports, "__esModule", { value: true });
const MockProducts_1 = require("./data/MockProducts");
let deliveries = MockProducts_1.Delivery;
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
