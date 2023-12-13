function PrimaryNumber (a,b){
   
   for (let i = a; i <= b; i++){
    let prime = true;
    
    if (i < 2){
        prime = false;
    }

    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(i + " est un nombre premier");
    } else {
        console.log(i + " n'est pas un nombre premier");
    }
   }

}


PrimaryNumber(7,14); 
PrimaryNumber(4,20); 
PrimaryNumber(1,30);
//------------------------------------------------------------------------

