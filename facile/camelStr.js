function toCamelCase(str){
    //pattern pour sélectionner
      let pattern = /-|_/gi;
    //.split pour enlever le pattern
       let words = str.split(pattern);
    
  // Mettre en minuscule la première lettre du premier mot
      let fisrtWord = words[0].toLowerCase();
  
      // Mettre en majuscule la première lettre de chaque mot (à partir du deuxième mot)
      for (let i = 1; i < words.length; i++) {
          let camelWords = words[i].toUpperCase()+words[i].slice(1);
      }
  
      // Joignez les mots pour former le CamelCase
      let camelString = fisrtWord + words.join('');
  
      return camelString;
   
  }