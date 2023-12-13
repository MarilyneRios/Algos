/*
Écrivez une instruction switch qui teste valet définit answerles conditions suivantes :
1- alpha
2- beta
3- gamma
4-delta
*/

function caseInSwitch(val) {
    let answer = "";
    switch(val) {
      case 1:
        answer = "alpha";
        break;
      case 2:
        answer = "beta";
        break;
      case 3:
        answer = "gamma";
        break;
      case 4:
        answer = "delta";
        break;
    }
    return answer;
  }
  
  console.log(caseInSwitch(1)); // should log "alpha"
  console.log(caseInSwitch(2)); // should log "beta"
  console.log(caseInSwitch(3)); // should log "gamma"
  console.log(caseInSwitch(4)); // should log "delta"
  
  
  caseInSwitch(1);