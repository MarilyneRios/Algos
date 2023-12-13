/*
1) trouver le nb premier:

function PrimaryNumber (nb){
    let prime = true;
    
    if (nb < 2){
        prime = false;
    }

    for (let i = 2; i < nb; i++) {
        if (nb % i === 0) {
            prime = false;
            break;
        }
    }
    if (prime) {
        console.log(nb + " est un nombre premier");
    } else {
        console.log(nb + " n'est pas un nombre premier");
    }
}
2) obtenir la liste des diviseurs:
 
function dividers(num) {
    const dividersList = []; 
  
    for (let d = 1; d <= num; d++) {
    
      if (num % d === 0) {
        dividersList.push(d); 
      }
    }
    return dividersList; 
  }
  
  console.log(dividers(12));

console.log(dividers2(12)); */

function dividersPrime (nb) {
    const dividersPrimeList = []; 
  
    for (let d = 1; d <= nb; d++) {
    
      if (nb % d === 0) {
        dividersList.push(d); 
      }
    }

    
    for(let dp of dividersList){
        let prime = true;
    
        if (dp < 2){
            prime = false;
        }
    
        for (let i = 2; i < dp; i++) {
            if (dp % i === 0) {
                prime = false;
                break;
            }
        }
        if (prime) {
            console.log(dp + " est un nombre premier");
        } else {
            console.log(dp + " n'est pas un nombre premier");
        }
    }
    return dividersPrimeList;
}


console.log(dividersPrime(12));
/*1 n'est pas un nombre premier
2 est un nombre premier
3 est un nombre premier
4 n'est pas un nombre premier
6 n'est pas un nombre premier
12 n'est pas un nombre premier
[ 1, 2, 3, 4, 6, 12 ] */
//------------------------------------------------------------------

function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function dividersPrime(nb) {
    const dividersList = [];
  
    for (let d = 1; d <= nb; d++) {
        if (nb % d === 0) {
            dividersList.push(d);
        }
    }
    
    for(let dp of dividersList){
        if (isPrime(dp)) {
            console.log(dp + " est un nombre premier");
        } else {
            console.log(dp + " n'est pas un nombre premier");
        }
    }
    return dividersList;
}

console.log(dividersPrime(12));
