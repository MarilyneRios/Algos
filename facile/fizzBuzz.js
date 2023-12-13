function fizzbuzz () {
    for (let i = 1; i<= 100; i++) {
        let output;
        //multiple de 3
        if (i % 3 === 0) {
            output = "Fizz"
        } else if (i % 5 === 0){
            output = "Buzz"
        } else (i % 3 === 0 && i % 5 === 0)
        console.log(output ? output : i)
    }
}

fizzbuzz();

// autre façon de faire

function fizzbuzz2(start, end) {
   
    // puis le transformer selon les règles de FizzBuzz //_ est une convention de nommage pour une variable dont la valeur est ignorée 
    const result = Array.from({length: end - start + 1}, (_, i) => start + i)
        .map(i => {
            if (i % 15 === 0) return "FizzBuzz";
            if (i % 3 === 0) return "Fizz";
            if (i % 5 === 0) return "Buzz";
            return i;
        });

    // Afficher le résultat
    console.log(result.join(', '));
}

fizzbuzz2(1,100);
