function carre(nb)
{
    let carre1 = nb * nb;
    return carre1;
}

function miroir(str)
{
    let str_inverse = "";

    let i = str.length - 1
    while(i >= 0)
    {
        str_inverse = str_inverse + str[i];
        i--;
    }
    return str_inverse;
}

function balance(nb1, nb2)
{
    if(nb1 < nb2)
    {
        return nb2;
    }
    else
    {
        return nb1;
    }
}

let choice = prompt("Choisissez entre : carre, miroir et balance")

if (choice == "carre")
{
   let nombre = Number(prompt("Donne moi un nombre :"))
   console.log("Carre est : ", carre(nombre)) 
}

else if (choice == "miroir")
{
   let str1 = prompt("Donne moi un string :")
   console.log("L inverse du string par la fonction miroir est : ", miroir(str1)) 
}

else if (choice == "balance")
{
    let nombre1 = Number(prompt("Donne moi le nombre 1 :"))
    let nombre2 = Number(prompt("Donne moi le nombre 2 :"))
    console.log("Le plus grand nombre est : ", balance(nombre1, nombre2)) 
}

else
{
    console.log("choix introuvable");
}