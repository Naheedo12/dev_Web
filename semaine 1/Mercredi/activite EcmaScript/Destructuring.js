// ex1
const personne = { nom: "salma", prenom : "elqadi", age: 25, ville: "Casablanca" };
const {nom, age} = personne

console.log(nom, age)

// ex2
const nombres = [10, 20, 30, 40];
const [num1,, num3] = nombres

console.log(num1, num3)

// ex3
const saluer1 = ({nom, prenom}) => {
    return `Bonjour ${nom} ${prenom}`
}

console.log(saluer1(personne))