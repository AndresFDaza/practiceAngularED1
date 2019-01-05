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