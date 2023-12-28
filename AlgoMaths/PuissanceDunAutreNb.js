function isPower(a, b) {
    // Initialiser la puissance à 1
    let i = 1;

    // Augmenter la puissance jusqu'à ce que b à la puissance i soit égal ou supérieur à a
    while (Math.pow(b, i) < a) {
        i++;
    }

    // Vérifier si b à la puissance i est égal à a
    if (Math.pow(b, i) === a) {
        console.log(`${a} est une puissance de ${b}`);
    } else {
        console.log(`${a} n'est pas une puissance de ${b}`);
    }
}

isPower(27, 3);
isPower(100, 2);

//----------------------------------------------------------------

//----------------------------------------------------------------
function isPower2(a, b) {
    // Utiliser la boucle for pour augmenter la puissance i de 0 à b
    for (let i = 0; i <= b; i++) {
        // Vérifier si b à la puissance i est égal à a
        if (Math.pow(b, i) === a) {
            console.log(`${a} est une puissance de ${b}`);
            return;
        }
    }

    console.log(`${a} n'est pas une puissance de ${b}`);
}

isPower2(27, 3);
isPower2(100, 2);
