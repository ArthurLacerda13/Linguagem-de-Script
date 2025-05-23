
spread1 = [1,3,5]
spread2 = [...spread1, 2, 4,6]
/*
for (let i in spread2) {
    console.log(spread2[i])
}

for (let elemento of spread2) {
    console.log(elemento)
}
*/
console.log(spread2)
spread2.splice(3,2,7)
console.log(spread2)

