function ascendingSort(values) {
   
   let croissant = values.sort();
   return croissant;
}

function descendingSort(values) {

  let décroissant = values.sort((a, b) => b - a);
   return décroissant ;
}

console.log(ascendingSort([5, 2, 1, 3, 4]));
// Expected: [1, 2, 3, 4, 5]

console.log(descendingSort([5, 2, 1, 3, 4]));
// Expected: [5, 4, 3, 2, 1]


// Do not edit/remove code under this line
module.exports = { ascendingSort, descendingSort };
