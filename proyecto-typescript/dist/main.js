"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gato_1 = require("./modelo/animal/gato");
var gato1;
gato1 = new gato_1.Gato("Iris", "criolla");
console.log("Gato 1 : ", gato1);
gato1.desplazar();
//conversion de tipo (casting)
gato1.ronronear();
//set nombre
gato1.nombre = 'bdn';
//get nombre
console.log("nvo nombre gato: ", gato1.nombre);
gato1.ronronear();
