let x = 5; // number
x = '5'; // string
//let x = '5'; //vai dar erro

var y = 10; //number
var y = 'teste'; // funciona, y será string

const z = 15; // constante

if (z >= 15){
    var a = 'a'
    // let b = 'b'// não funciona fora do escopo do if
    b = 'b' //funciona fora do escopo do if
    const c = 'c' //funciona somente no escopo do if 
}

console.log(a)
console.log(b)
// console.log(c)

let numero = 5 //number
let str = 'Hello Word' //string
let pi = 3.14 //number
let verdadeiro = true //boolean
let i = undefined //undefined
let object = null //object

let lista = [1, 2, 'a', 'b', true]

console.log( typeof lista )