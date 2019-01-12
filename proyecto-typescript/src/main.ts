import { Animal } from "./modelo/animal/animal";
import { Gato } from "./modelo/animal/gato";

let gato1:Animal;
gato1 = new Gato("Iris", "criolla");
console.log("Gato 1 : ", gato1);
gato1.desplazar();
//conversion de tipo (casting)
(gato1 as Gato).ronronear();

//set nombre
gato1.nombre='bdn';
//get nombre
console.log("nvo nombre gato: ",gato1.nombre);
(<Gato>gato1).ronronear();
