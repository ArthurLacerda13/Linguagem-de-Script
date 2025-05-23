import { Exams } from "./funcoes.js";

const gabarito = ['a', 'b', 'a', 'c', 'd'];
const peso = 2
const prova = new Exams(gabarito, peso);

prova.add(['a', 'b', 'b', 'b', 'b']);
prova.add(['a', 'b', 'a', 'c', 'd']);
prova.add(['a', 'b', 'c', 'd', 'a']);


console.log('Média:', prova.avg());
console.log('Nota mínima:', prova.min());
console.log('Nota máxima:', prova.max());
console.log('Notas menores que 5:', prova.lt(5));
console.log('Notas maiores que 5:', prova.gt(5));