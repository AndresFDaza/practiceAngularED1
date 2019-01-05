"use strict";
var numeroEstudiantes;
numeroEstudiantes = 40;
console.log("Numero de estudiantes: ", numeroEstudiantes);
var cursoIniciado = true;
cursoIniciado = false;
var nombreCurso = "AngularDsd0";
var contenidoCurso = "\n    Herramientas de desarrollo\n    Introduccion a typescript\n    Introduccion a Angular\n";
console.log("Nombre del curso: ", nombreCurso);
console.log("Contenido del curso: ", contenidoCurso);
var bienvenida = "Bienvenidos al curso " + nombreCurso;
console.log(bienvenida);
var arregloA = [1, 2, 3, 4, 5];
console.log("Arreglo A : ", arregloA);
var arregloB;
arregloB = ["a", "b", "c"];
console.log("Arreglo B : ", arregloB);
// TypeScript Enums
var DiaCurso;
(function (DiaCurso) {
    DiaCurso[DiaCurso["MARTES"] = 0] = "MARTES";
    DiaCurso[DiaCurso["VIERNES"] = 1] = "VIERNES";
})(DiaCurso || (DiaCurso = {}));
;
var DiaSemana;
(function (DiaSemana) {
    DiaSemana[DiaSemana["LUNES"] = 0] = "LUNES";
    DiaSemana[DiaSemana["MARTES"] = 1] = "MARTES";
    DiaSemana[DiaSemana["MIERCOLES"] = 2] = "MIERCOLES";
    DiaSemana[DiaSemana["JUEVES"] = 3] = "JUEVES";
    DiaSemana[DiaSemana["VIERNES"] = 4] = "VIERNES";
})(DiaSemana || (DiaSemana = {}));
;
var primerDia;
primerDia = DiaCurso.MARTES;
console.log("primer dia : ", primerDia);
console.log("primer dia (valor) : ", DiaCurso[primerDia]);
console.log("primer dia (valor) : ", DiaCurso[0]);
