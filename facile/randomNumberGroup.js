function getRandomNumber(min, max) {
    let randomNumber;
   
   
    randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
   
   
    console.log(randomNumber);
}

getRandomNumber()