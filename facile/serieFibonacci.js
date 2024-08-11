// Programme pour générer la série de Fibonacci jusqu'à n termes
// Une séquence de nombres entiers fascinante dans laquelle chaque nombre est la somme des deux nombres qui le précèdent

// Importe le module readline pour lire l'entrée de l'utilisateur
const readline = require('readline'); 

const rl = readline.createInterface({
    input: process.stdin, // Utilise l'entrée standard (la console) comme source d'entrée
    output: process.stdout // Utilise la sortie standard (la console) comme destination de sortie
});

rl.question('Entrez le nombre de termes : ', (answer) => {
    const number = parseInt(answer); // Convertit la réponse de l'utilisateur en nombre entier
    let n1 = 0, n2 = 1, nextTerm; // Initialise les deux premiers termes et le terme suivant

    // Affiche le début de la série
    console.log('Série de Fibonacci :');

    // Logique de la fibonacci série
    for (let i = 1; i <= number; i++) {
        // Affiche le terme actuel
        console.log(n1); 
        // Calcule le terme suivant en ajoutant n1 et n2
        nextTerm = n1 + n2; 
        n1 = n2; // Met à jour n1 avec la valeur de n2
        n2 = nextTerm; // Met à jour n2 avec le terme suivant
    }

    // Ferme l'interface de lecture
    rl.close(); 
});

//----------------------------------------------
function fibonacciGenerator(n) {
    var fib = [0, 1]; // Initialisation avec les deux premiers nombres
    for (var i = 2; i < n; i++) {
        // fib[i - 1] = nb précédant => 1;  fib[i - 2]= nb qui précède le précédant => 0
        fib.push(fib[i - 1] + fib[i - 2]);
    }
    return fib;
}

console.log(fibonacciGenerator(10)); // Affiche les 10 premiers nombres de la séquence
