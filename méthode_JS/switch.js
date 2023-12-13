/**Écrivez une instruction switch à définir answerpour les plages suivantes :
1-3- Low
4-6- Mid
7-9-High

Remarque : Vous aurez besoin d'une casedéclaration pour chaque numéro de la plage.*/
function sequentialSizes(val) {
    let answer = "";
   
    switch (val) {
      case 1:
      case 2:
      case 3:
        answer = "Low";
        break;
      case 4:
      case 5:
      case 6:
        answer = "Mid";
        break;
      case 7:
      case 8:
      case 9:
        answer = "High";
        break;
    }
   
    return answer;
  }
  
  console.log(sequentialSizes(1));  // Outputs: Low
  /*Si vous avez le choix entre de nombreuses options, 
  une switchinstruction peut être plus facile à écrire que 
  plusieurs instructions if/ else ifenchaînées */
  if (val === 1) {
    answer = "a";
  } else if (val === 2) {
    answer = "b";
  } else {
    answer = "c";
  }
  //-----------------------------------------------------------

  switch (val) {
    case 1:
      answer = "a";
      break;
    case 2:
      answer = "b";
      break;
    default:
      answer = "c";
  }