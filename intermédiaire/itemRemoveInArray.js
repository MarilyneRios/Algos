function arrayDiff(a, b) {
  
    let array = [...a]; // créer un nouveau tableau en gardant les élément de a
    let elementRemove = new Set (b); //gérer automatiquement les doublons (Set = valeur unique) 
    
    for (let i of elementRemove){
      
        array = array.filter(e => e !== i);//créer un nouveau tableau sans elementRemove
        console.log(array);
      
      };
    return array;
  };

