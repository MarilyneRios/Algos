function getRandomNumber() {
    const min = 1;
    const max = 1000;
    let randomNumber;
   
   
    randomNumber = Math.random() * (max - min) + min;
    randomNumber = Math.floor(randomNumber);
   
   
    console.log(randomNumber);
   }

   getRandomNumber();