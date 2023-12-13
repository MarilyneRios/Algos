const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  if (strokes == 1) {
    return "Hole-in-one!";
  } else if (strokes <= par - 2) {
    return "Eagle";
  } else if (strokes == par - 1) {
    return "Birdie";
  } else if (strokes == par) {
    return "Par";
  } else if (strokes == par + 1) {
    return "Bogey";
  } else if (strokes == par + 2) {
    return "Double Bogey";
  } else if (strokes >= par + 3) {
    return "Go Home!";
  }
}


golfScore(5, 4);

/*
Votre fonction sera transmise parainsi que strokesles arguments. 
Renvoie la chaîne correcte selon ce tableau qui répertorie les 
traits par ordre de priorité ; de haut en bas (le plus haut) vers le bas (le plus bas) :

Strokes	Return
1	"Hole-in-one!"
<= par - 2	"Eagle"
par - 1	"Birdie"
par	"Par"
par + 1	"Bogey"
par + 2	"Double Bogey"
>= par + 3	"Go Home!"

paret strokessera toujours numérique et positif. 
Nous avons ajouté un tableau de tous les noms pour votre commodité.*/