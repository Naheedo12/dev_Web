function majusculesAlternees(str)
{
    let alt = "";

    let i = 0;
    while(i <= str.length - 1)
    {
        if (i % 2 == 0)
        {
            alt = alt + mot[i].ToUpperCase();
        }
        else
        {
            alt = alt + mot[i].ToLowerCase();
        }
        i++;
    }
    return alt;
}

let word = prompt("Donne un string : ")
let choice = prompt("donne un choix entre alternee, remplace et inverse : ")

if (choice == "alternee")
{
    let str1 = prompt("Donne moi un string :")
    console.log("L inverse du string par la fonction miroir est : ", alternee(str1))
}

else if (choice == "remplace")
{
 
}