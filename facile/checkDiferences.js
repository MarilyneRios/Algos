function checkDifferences(arrays) {
    let result = [];
 
    // La méthode every teste si tous les éléments d’un tableau passent le test implémenté par la fonction fournie.
    // Elle renvoie true si tous les éléments passent le test.
    for (let array of arrays){
        let first = array[0];
        if(array.every(element => element === first)){
            result.push(true);
        } else {
            result.push(false);
        }
    }

    return result;
}

console.log(checkDifferences([
    [true, true, true, true],
    ['test', 'test', 'test'],
    [1, 1, 1, 2],
    ['10', 10, 10, 10]
]));
// Expected: true, true, false, false