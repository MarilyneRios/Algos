// Le triangle de Pascal est une structure mathématique qui commence par un 1 au sommet et a des 1 sur les bords gauche et droit.
// Les autres nombres à l’intérieur du triangle sont la somme des deux nombres situés directement au-dessus d’eux.

function generatePascalsTriangle(n) {
    // Initialise un tableau vide pour stocker les lignesTableau du triangle
    const lignesTableau = [];

    // Parcours chaque ligne du triangle
    for (let row = 0; row < n; row++) {
        // Initialise un tableau vide pour stocker les éléments de cette ligne
        lignesTableau[row] = [];

        // Parcours chaque élément de la ligne
        for (let col = 0; col <= row; col++) {
            if (col === 0 || col === row) {
                // Les bords gauche et droit contiennent toujours 1
                lignesTableau[row][col] = 1;
            } else {
                // Calcule les autres éléments en additionnant les deux nombres au-dessus
                lignesTableau[row][col] = lignesTableau[row - 1][col] + lignesTableau[row - 1][col - 1];
            }
        }
    }

    // Renvoie le tableau complet du triangle de Pascal
    return lignesTableau;
}

// Définit le nombre de lignesTableau souhaité
const numRows = 6;

// Appelle la fonction pour générer le triangle
const triangle = generatePascalsTriangle(numRows);

// Affiche chaque ligne du triangle dans la console
for (let i = 0; i < triangle.length; i++) {
    console.log(triangle[i]);
}

