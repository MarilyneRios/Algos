function upperFirst(contacts) {
    const formattedContacts = [];
    
    for (let i = 0; i< contacts.length; i++){
     //1ere Lettre en maj
      const NameUpper = contacts[i][0].toUpperCase();
   //nom en minuscules après la 1ere lettre
      const NameLower = contacts[i].slice(1).toLowerCase();
       //associer les 2
    formattedContacts.push(NameUpper+NameLower);
    }
    
    
    return formattedContacts;
}

console.log(upperFirst(['pierre', 'PAUL', 'jAcqUes']));
// Expected: ['Pierre', 'Paul', 'Jacques']