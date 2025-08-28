let num2 = [5, 10, 15, 20]
console.log(num2)

let num_reduce = num2.reduce((acc, actuelle) => {
    somme = acc + actuelle
    return somme;
})

console.log(num_reduce)