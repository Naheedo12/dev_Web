let nb_personnes = Number(prompt("combien de personnes vont jeter une pièce ?"));

let contenu = 1;#

i = 0;
while(i <= nb_personnes-1)
{
    contenu *= 2;
    if(contenu % 7 == 0)
    {
        contenu = Math.floor(contenu / 2)
    }
    i++;
    console.log(`Le nombre de pièces après la personne ${i} est : ${contenu}`);
}

console.log(`Le total final dans la fontaine est : ${contenu}`);