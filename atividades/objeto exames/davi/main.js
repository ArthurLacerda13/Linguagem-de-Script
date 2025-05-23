import { Exams } from "./function.js"

const gabarito = ['a', 'b', 'a', 'c', 'd'];
const pesos = [2, 2, 2, 2, 2];
const prova = new Exams(gabarito, pesos);

prova.add(['a', 'b', 'b', 'b', 'b']);
prova.add(['a', 'b', 'a', 'c', 'd']);
prova.add(['a', 'b', 'c', 'd', 'a']);


console.log('Média:', prova.avg());
console.log('Nota mínima:', prova.min());
console.log('Nota máxima:', prova.max());
console.log('Notas menores que 5:', prova.lt(5));
console.log('Notas maiores que 6:', prova.gt(6));