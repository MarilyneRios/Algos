function Sol (nb){
let sum = 0;
if(nb<0) {
    return 0;
};

for (let x = 3; x<nb; x++){
    if (x % 3 === 0 ||x % 5 === 0){
        sum += x;
    }
}

console.log(sum)
return sum;

}

Sol(10);