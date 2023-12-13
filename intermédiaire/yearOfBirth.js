// Définit un objet personne avec les propriétés nom, âge et année de naissance
function person(name, age) {
    this.name= name; // Assigne le nom par le paramètre de la fonction
    this.age = age; // Assigne l'âge par le paramètre de la fonction
    this.yearOfBirth = bornYear; // Assigne la méthode yearOfBirth qui calcule l'année de naissance
}
// Définit la fonction bornYear qui retourne le résultat de 2016 moins l'âge de la personne
function bornYear() {
    return 2016 - this.age;
}

var p = new person("A", 22); // Crée une nouvelle instance de l'objet personne avec le nom "A" et l'âge 22

document.write(p.yearOfBirth()); // Écrit le résultat de la méthode yearOfBirth de l'objet p dans le document

//1994