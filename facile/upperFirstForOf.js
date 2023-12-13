function upperFirst(contacts) {
    const formattedContacts = [];
    
    for (let contact of contacts){
     //1ere Lettre en maj
      const NameUpper = contact.toUpperCase();
   //nom en minuscules après la 1ere lettre
      const NameLower = contact.slice(1).toLowerCase();
       //associer les 2
    formattedContacts.push(NameUpper+NameLower);
    }
        
    return formattedContacts;
}

console.log(upperFirst(['pierre', 'PAUL', 'jAcqUes']));
// Expected: ['Pierre', 'Paul', 'Jacques']