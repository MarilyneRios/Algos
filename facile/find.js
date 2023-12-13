function findPositiveValue(values) {
  // Parcourt la liste de valeurs
  for (let i = 0; i < values.length; i++) {
    // Si la valeur courante est positive
    if (values[i] > 0) {
      // Retourne la valeur positive
      return values[i];
    }
  }  
}

function findNegativeValue(values) {
  for (let i = 0; i < values.length; i++) {
    // Si la valeur courante est négative
    if (values[i] < 0) {
      // Retourne la valeur négative
      return values[i];
      }  
 }
}

console.log(findPositiveValue([-54, -82, 2, -10, -9]));
// Expected: 2

console.log(findNegativeValue([54, 82, 2, -10, 9]));
// Expected: -10


// Do not edit/remove code under this line
module.exports = { findPositiveValue, findNegativeValue };
