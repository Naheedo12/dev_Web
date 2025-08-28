//  Challenge : Le Voyageur et ses pièces d’or

let or = 100;
let jrs = Number(prompt("Entrez le nombre des jours que vous voulez voyager :"))

jr = 1;
while(jr <= jrs)
{
    if(jr % 2 != 0)
    {
        or = or - 3;
    }

    else
    {
        or = Math.floor(or / 2);
    }
    if(or == 0)
    {
        console.log(`Le voyageur est expulsé du royaum, il a survécu ${jr} jours`);
        break;
    }
    if(jr == jrs)
    {
        console.log(`Le voyageur a terminé son voyage avec ${or} pièces d or`);5
    }
    jr++;
}