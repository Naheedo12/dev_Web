// EX 1
    const somme = (...nbrs) =>{
     return nbrs.reduce((a,b) => a+b,0)
}
document.writeln(somme(3,5,8,9))

// EX2
const fruits = ["pomme", "banane", "orange", "kiwi"];
const [first, ...rest] = fruits
document.writeln(first)
document.writeln(rest)


