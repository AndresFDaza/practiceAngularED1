let numeroEstudiantes:number;
numeroEstudiantes = 40;

console.log("Numero de estudiantes: " , numeroEstudiantes);

let cursoIniciado=true;
cursoIniciado = false;

let nombreCurso: string = "AngularDsd0"
 
let contenidoCurso: string = `
    Herramientas de desarrollo
    Introduccion a typescript
    Introduccion a Angular
`;

console.log("Nombre del curso: ", nombreCurso);
console.log("Contenido del curso: ", contenidoCurso);

let bienvenida:string=`Bienvenidos al curso ${nombreCurso}`;
console.log(bienvenida);

let arregloA:number[]=[1,2,3,4,5];
console.log("Arreglo A : " , arregloA);
let arregloB:Array<string>;
arregloB = ["a" , "b" , "c"]; 
console.log("Arreglo B : " , arregloB);

// TypeScript Enums

enum DiaCurso { MARTES, VIERNES};
enum DiaSemana { LUNES, MARTES, MIERCOLES, JUEVES, VIERNES};

let primerDia:DiaCurso;
primerDia = DiaCurso.MARTES; 
console.log("primer dia : ",primerDia)
console.log("primer dia (valor) : " , DiaCurso[primerDia])
console.log("primer dia (valor) : " , DiaCurso[0])

let unaVariable:any;
unaVariable = 345345 ;
unaVariable = "un texto"
unaVariable = [1,23,4,3,2.4]
unaVariable = false ;

const PI = 3.1416;
// PI = 0;
 
let persona:any = {
    name: "Andres",
    curso: "AngularJS"
}

console.log("persona 1: ", persona);

const persona2 = {
    name : "juan",
    curso : "JavaScript"
}

console.log("persona 2: " , persona2);

persona2.name = "ya no es juan";
persona2.curso = "ya no codea"

console.log("persona 2 nvo" , persona2);

function holaMundo():string{
    return "hola mundo";
}

function saludar( mensaje:string):void{
    console.log("saludo: ", mensaje);
}

saludar("Sigue aprendiendo, rendirse no es opción");


