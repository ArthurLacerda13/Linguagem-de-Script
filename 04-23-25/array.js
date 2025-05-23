const array = [1, 'teste', [1,2,3]]
console.log(array[0])

console.log(array[2][1])

let arraysAsObject = new Array(3,2,1)
console.log(arraysAsObject)
arraysAsObject = new Array(1,2,3,4,5)
console.log(arraysAsObject)

let spread = [1,3,5]
spread.push(7)
spread.push(10)

let spread2 = spread
spread2[0] = 2

console.log(spread[0])

// spread operator

let spread1 = [1,3,5]
spread.push(7)
spread.push(10)

let spread3 = [...spread1]
spread3[0] = 2

console.log(spread1[0])

for (let i in spread1) {
    console.log(spread2[i])
}