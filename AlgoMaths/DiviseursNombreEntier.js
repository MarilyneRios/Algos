// Fonction pour trouver les diviseurs d'un nombre donné
function dividers(num) {
    const dividersList = []; // Initialise une liste pour stocker les diviseurs
  
    // Parcours de tous les nombres de 1 à num inclusivement
    for (let d = 1; d <= num; d++) {
      // Vérifie si le nombre (num) est divisible par d
      if (num % d === 0) {
        dividersList.push(d); // Si oui, ajoute d à la liste des diviseurs
      }
    }
    return dividersList; 
  }
  
  console.log(dividers(12));
  //-----------------------------------------------------------------------
 //------------------------------------------------------------------------
  
  function dividers(num) {
  const dividersList = []; 

  // Parcours de tous les nombres de 1 à num inclusivement
  for (let d of Array.from(Array(num + 1).keys())) {
    // Vérifie si le nombre (num) est divisible par d
    if (num % d === 0) {
      dividersList.push(d);
    }
  }
  return dividersList;
}

console.log(dividers(12));
  
//------------------------------------------------------------------------
//------------------------------------------------------------------------


function dividers(num) {
    
    // Vérifie si num est un nombre entier positif
    if (Number.isInteger(num) && num > 0) {
      const dividersList = []; 
    
      for (let d = 1; d <= num; d++) {
        if (num % d === 0) {
          dividersList.push(d); 
        }
      }
  
      return dividersList; 
    } else {
      return "Veuillez entrer un nombre entier positif."; 
    }
  }
  

  console.log(dividers(12)); 
  console.log(dividers(7)); 
  console.log(dividers(-8)); 
  