let num = [5, 8, 9, 2, 3]

num [5] = 6

num.push(1)

num.length

num.sort()
/*
let vog = ["i", "o", "a", "u"]

vog.push("e")

vog.sort()

console.log(`Esse é o vetor ${vog}`)
*/
console.log(`O vetor tem ${num.length} posições.`)

console.log(`O primeiro valor do vetor é ${num[0]}`)

//console.log(`O último valor do vetor é ${num[(num.length)]}`)

for (let c = 0; c < num.length; c++) {
    console.log(`${num[c]}`)
}

