function fibonacci(n) {
 
    // Initialisation du tableau avec les deux premiers nombres de la séquence de Fibonacci
    let result = [0, 1];
    
    // Si n est inférieur ou égal à 2, on renvoie les n premiers nombres de la séquence
    if (n <= 2) {
      return result.slice(0, n);    
    }
    
    // Initialisation des trois premières variables de la séquence
    let first = 0;
    let second = 1;
    let next;
    
    // Boucle for qui génère le reste de la séquence
    for(let i = 0; i < n - 2; i++) {
       
        // Calcul du prochain nombre de la séquence
        next = first + second;
        
        // Mise à jour des variables first et second pour le prochain tour de boucle
        first = second;
        second = next;
        
        // Ajout du prochain nombre à la séquence
        result.push(next);
    }
    
    // Renvoie la séquence de Fibonacci
    return result;
  }
  
  // Appel de la fonction pour vérifier son fonctionnement
  console.log(fibonacci(8));
  // Résultat attendu : [0,1,1,2,3,5,8,13]
  