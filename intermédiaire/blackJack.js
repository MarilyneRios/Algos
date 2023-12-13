/*  le comptage de cartes:
Lorsque le décompte est positif, le joueur doit miser haut. 
Lorsque le décompte est nul ou négatif, le joueur doit miser peu.

Changement de compte	Cartes
+1	2, 3, 4, 5, 6
0	7, 8, 9
-1	10, 'J', 'Q', 'K', 'A'

Exemples de résultats : -3 Hold ou5 Bet

Astuce
Ne réinitialisez PAS countà 0 lorsque la valeur est 7, 8 ou 9.
Ne renvoyez PAS de tableau.
N'incluez PAS de guillemets (simples ou doubles) dans la sortie.
 */

let count = 0;
function cc(card) {
       
    switch (card) {
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            count++;
            break;
  
        case 10:
        case 'J':
        case 'Q':
        case 'K':
        case 'A':
            count--;
            break;
        }
    
    if (count > 0) {
         return count + " Bet";
    } else {
         return count + " Hold";
    }

}

cc(2); cc(3); cc(7); cc('K'); cc('A');


console.log(cc(2)); 
console.log(cc(3)); 
console.log(cc(7)); 
console.log(cc('K')); 
console.log(cc('A'));