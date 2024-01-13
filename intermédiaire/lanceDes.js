/*//variables globales
const dices = [1, 2, 3, 4, 5, 6];
let points = 0;

// lancer de dés
function randomDices() {
  //Math.floor arrondir à l'unité
  // Génère un nombre aléatoire entre 1 et 6 inclus =>* 6) + 1
  return Math.floor(Math.random() * 6) + 1;
}

console.log(randomDices);

//compter les numéros de dés sortis
function calculateNbDice(dices) {
  let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  // Simuler le lancer de 6 dés + mettre à jour les compteurs
  for (let i = 0; i < 5; i++) { // ATTENTION de 0 à 5 = 6dés
    let result = randomDices();
    dices[i] = result; // Mettre à jour le tableau dices avec les résultats du lancer
    counts[result]++;
  }
  // Affichez les résultats
  for (let nbDice in counts) {
    console.log(`Numéro du dé ${nbDice} : ${counts[nbDice]} fois`);

  }
  return counts;
 
}

// Simuler le lancer de 6 dés et obtenir les résultats
let diceCounts = calculateNbDice(dices);

//compter les points
function countPoint(counts){
    for (let calculateNbDice in counts) {
        if (calculateNbDice === '1') {

            points += Math.floor(counts[calculateNbDice] / 3) * 1000; // Ajouter les points pour les triplettes
            points += (counts[calculateNbDice] % 3) * 100; // Ajouter les points pour les dés restants

        } else if (calculateNbDice === '5') {
            points += Math.floor(counts[calculateNbDice] / 3) * 500; // Ajouter les points pour les triplettes
            points += (counts[calculateNbDice] % 3) * 50; // Ajouter les points pour les dés restants

        } else if (counts[calculateNbDice] >= 3) {
             //attention les clés dans un objet sont toujours des chaînes de caractères.
             //=> convertir en nombre parseInt
          points += parseInt(calculateNbDice) * 100;
        }
      }

    }
    
    // Calculer les points en fonction des résultats du lancer de dés
    countPoint(diceCounts);

// Afficher le résultat
console.log(`Total des points : ${points}`); */

// Variables globales
const dices = [1, 2, 3, 4, 5, 6];
let points = 0;

// Fonction de lancer de dés
function randomDices() {
  return Math.floor(Math.random() * 6) + 1;
}

// Fonction pour compter le nombre de chaque dé
function calculateNbDice(dices) {
  let counts = { 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0 };

  // Réinitialiser les points pour chaque test
  points = 0;

  // Simuler le lancer de 5 dés et mettre à jour les compteurs
  for (let i = 0; i < 5; i++) {
    let result = randomDices();
    dices[i] = result;
    counts[result]++;
  }

  // Afficher les résultats
  for (let nbDice in counts) {
    console.log(`Numéro du dé ${nbDice} : ${counts[nbDice]} fois`);
  }


  // Calculer les points
  for (let diceNumber in counts) {
    if (diceNumber === '1') {
      if (counts[diceNumber] >= 3) {
        points += 1000 + (counts[diceNumber] - 3) * 100;
      } else {
        points += counts[diceNumber] * 100;
      }
    } else if (diceNumber === '5') {
      points += Math.floor(counts[diceNumber] / 3) * 500 + (counts[diceNumber] % 3) * 50;
    } else if (counts[diceNumber] >= 3) {
      points += parseInt(diceNumber) * 100;
    }
  }

  // Afficher le total des points
  console.log(`Total des points : ${points}`);

  // Retourner les comptes
  return counts;
}

// Tests
calculateNbDice([5, 1, 3, 4, 1]); // Attendu : 250
console.log("Points pour le premier test : " + points);

calculateNbDice([1, 1, 1, 3, 1]); // Attendu : 1100
console.log("Points pour le deuxième test : " + points);

calculateNbDice([2, 4, 4, 5, 4]); // Attendu : 450
console.log("Points pour le troisième test : " + points);
