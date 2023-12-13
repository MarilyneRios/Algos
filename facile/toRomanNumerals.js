// Définition de la fonction pour convertir un nombre en chiffres romains
function toRomanNumerals (number) {
    // Initialisation de la chaîne de caractères qui contiendra le résultat
    let romanValue = '';

    // Définition de l'objet qui associe chaque chiffre romain à sa valeur en chiffres arabes
    const romanNumerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};

    // Boucle sur chaque chiffre romain
    for (const i in romanNumerals ) {
        // Calcul du quotient de la division du nombre par la valeur du chiffre romain
        const quotient = Math.floor(number / romanNumerals[i]);

        // Si le quotient est supérieur à 0
        if (quotient > 0) {
            // Ajout du chiffre romain à la chaîne de caractères autant de fois que le quotient
            for (let j = 0; j < quotient; j++) {
                romanValue += i;
            }
            // Soustraction de la valeur du chiffre romain multipliée par le quotient au nombre
            number -= quotient * romanNumerals[i];
        }

        // Alternative avec boucle while
        // while ( number >= romanNumerals[i] ) {
        //   romanValue += i;
        //   number -= romanNumerals[i];
        // }
    }

    // Retour de la chaîne de caractères contenant le nombre en chiffres romains
    return romanValue;
}

// Appel de la fonction avec le nombre 984 en argument
console.log(toRomanNumerals(984)); // Résultat attendu : 'CMLXXXIV'
  
  //https://www.youtube.com/watch?v=WFyrryNO9Nk