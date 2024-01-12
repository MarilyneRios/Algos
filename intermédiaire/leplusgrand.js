let list = [[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]];


function getBiggest(numbers) {

    let bigNumbers = [];

    for (let i = 0; i < numbers.length; i++) {
        // Trouver le plus grand nombre dans le sous-tableau courant avec Math.max
        let maxInSubArray = Math.max(...numbers[i]);
        // Ajouter le plus grand nombre à la fin du tableau bigNumbers avec push
        bigNumbers.push(maxInSubArray);
    }
    
    // Retourner le tableau bigNumbers
    return bigNumbers;
}

console.log(getBiggest(list));

// Le résultat attendu est [5,27,39,1001]

//----------------------------------------------------------------------------
function getBiggest2(numbers) {
    
    let bigNumbers = [];
    // Utiliser la méthode map pour parcourir chaque élément de numbers et appliquer une fonction
    bigNumbers = numbers.map(function(subArray) {
        // Trouver le plus grand nombre dans le sous-tableau courant avec Math.max
        let maxInSubArray = Math.max(...subArray);
        // Retourner le plus grand nombre
        return maxInSubArray;
    });
    // Retourner le tableau bigNumbers
    return bigNumbers;
}
console.log(getBiggest2(list));