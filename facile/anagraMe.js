function anagramMe(word) {
    const anagramList = []; 

    for (let i = 0; i < word.length; i++) { 
        const letter = word[0]; // Sélectionne le premier caractère du mot

        // Génère des anagrammes partiels pour le reste du mot récursivement
        const newWord = anagramMe(word.slice(1, word.length));

        // Ajoute chaque combinaison du caractère sélectionné avec les anagrammes partiels obtenus
        for (let j = 0; j < newWord.length; j++) {
            anagramList.push(letter + newWord[j]);
        }

        // Réorganise le mot pour considérer un autre caractère en première position
        word = word.substr(1, word.length - 1) + letter;
    }
    
    return anagramList.sort(); // Retourne la liste des anagrammes triée
}


console.log(anagramMe('AGE'));
// Expected: ['AEG', 'AGE', 'EAG', 'EGA', 'GAE', 'GEA']

//-----------------------------------------------------------
//-----------------------------------------------------------

function anagramMe(word) {
    // Si le mot est vide, renvoyer une liste vide
    if  (word.length === 1) {
        return [word];
    }
   
    else {
      const anagramList = [];
      // Pour chaque lettre du mot
      for (let lettre of word) { 
        // remplace la 1ere lettre par ""
       let reste = word.replace(lettre, ""); 
       // créer une nouvelle fct pour créer des anagrammes partiels
        let anagrammes_partiels = anagramMe(reste);
        // Si la liste des anagrammes partiels est vide, ajouter la lettre seule à la liste des anagrammes
        if (anagrammes_partiels.length == 0) {
            anagramList.push(lettre);
        }
        // Sinon, ajouter la lettre au début de chaque anagramme partiel, et ajouter le résultat à la liste des anagrammes
        else {
          for (let anagramme_partiel of anagrammes_partiels) { 
            anagramList.push(lettre + anagramme_partiel);
          }
        }
      }
     
      return anagramList.sort();
    }
  }
  
  console.log(anagramMe("AGE")); 