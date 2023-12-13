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


PrimaryNumber(7,14); // 7 % 2 = 1; 7 % 3 = 1; 7 % 4= 3; 7 % 5 = 2; 7 % 6 = 1; => C'est un nombre premier
PrimaryNumber(4,20); // 4 % 2 = 0; => Ce n'est pas un nombre premier
PrimaryNumber(1,30);