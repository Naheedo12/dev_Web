// ex1
const addition = (a, b) => a + b;

// ex2
let tab_num;
let num;
const multiplierParDeux = (tab_num) => {
    return tab_num.map(num => num * 2)
}

console.log(multiplierParDeux([1,3,2,4,5,6,7,9]))

// ex3
const saluer = (nom) => {
    return `Bonjour, ${nom}!`
}
console.log(saluer("salma"))