// ex1
const tab1 = [1, 2, 3]; 
const tab2 = [4, 5, 6];

const fusion = [...tab1, ...tab2];
console.log(fusion);

// ex2
const user = { nom: "Ali", age: 25 };
const nouvelUser = { ...user, pays: "Maroc" };
console.log(nouvelUser);
