function findUser(request, list) {
    let userFound ;
    
    userFound = list.find(user => user === request);
    /*Cette ligne utilise la méthode find sur list. 
    La méthode find parcourt chaque élément de la liste 
    et exécute la fonction user => user === request. 
    Cette fonction vérifie si chaque user dans la liste 
    est égal à request. Si une correspondance est trouvée, 
    find renvoie cet utilisateur et le stocke dans userFound. */
   return userFound ? true: false;
}

const search = 'Lucas';
const usersList = ['Lucas', 'Juliette', 'William', 'Camille', 'Pauline', 'Sébastien'];

console.log(findUser(search, usersList));
// Expected: true