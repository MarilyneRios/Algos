/*
Un nombre divisible par lui même et par 1
supérieur ou égal à 2
*/

function PrimaryNumber (nb){
    let prime = true;
    
    if (nb < 2){
        prime = false;
    }

    for (let i = 2; i < nb; i++) {
        if (nb % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(nb + " est un nombre premier");
    } else {
        console.log(nb + " n'est pas un nombre premier");
    }
}


PrimaryNumber(7); // 7 % 2 = 1; 7 % 3 = 1; 7 % 4= 3; 7 % 5 = 2; 7 % 6 = 1; => C'est un nombre premier
PrimaryNumber(4); // 4 % 2 = 0; => Ce n'est pas un nombre premier
PrimaryNumber(9); // 9 % 2 = 1; 9 % 3 = 0; => Ce n'est pas un nombre premier
PrimaryNumber(1);
