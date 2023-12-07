// Fonction pour trouver les diviseurs d'un nombre donné
function dividers(num) {
    const dividersList = []; // Initialise une liste pour stocker les diviseurs
  
    // Parcours de tous les nombres de 1 à num inclusivement
    for (let d = 1; d <= num; d++) {
      // Vérifie si le nombre (num) est divisible par d
      if (num % d === 0) {
        dividersList.push(d); // Ajoute d à la liste des diviseurs
      }
    }
    return dividersList; 
  }
  
  console.log(dividers(12));
  //-----------------------------------------------------------------------
 //------------------------------------------------------------------------
  
function dividers2(num) {
  const dividersList = []; 

  // Array.from(Array(num + 1)): Convertit le tableau précédent en un nouveau tableau
  // la méthode keys() pour remplacer chaque élément undefined par son index
  for (let d of Array.from(Array(num + 1).keys())) {

    if (num % d === 0) {
      dividersList.push(d);
    }
  }
  return dividersList;
}

console.log(dividers2(12));
  
//------------------------------------------------------------------------
//------------------------------------------------------------------------


function dividers3(num) {
    
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
  
 
  console.log(dividers3(12)); 
  console.log(dividers3(7)); 
  console.log(dividers3(-8)); 
  