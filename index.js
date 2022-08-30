import TDACadena from "./js/TDACadena.js";

const cadena = new TDACadena;

// * Toma 1 cadena | retorna arreglo con cadena modificada y dato eliminado 
const BorraInicio = cadena.borraInicio('Borrame');
const [ cadenaModificada, caracter ] = BorraInicio;

console.log(cadenaModificada);
console.log(caracter);

// * Toma 1 cadena | retorna boleano 
const compruebaVacio = cadena.vacia('Esto debe de dar falso')
console.log(compruebaVacio);

// * Toma 1 cadena y 1 caracter | retorna cadena modificada
const agregaAlFinal = cadena.agreagaFinal('Bria','n')
console.log(agregaAlFinal);
