import { Animal } from "./modelo/animal/animal";
import { Gato } from "./modelo/animal/gato";

let gato1:Animal;
gato1 = new Gato("Iris", "criolla");
console.log("Gato 1 : ", gato1);
gato1.desplazar();
(gato1 as Gato).ronronear();
(<Gato>gato1).ronronear();
