// Définit la fonction principale qui s'exécute au démarrage du programme
function main() {
    // Lit l'identifiant du produit à partir de l'entrée standard
    var prodID = readLine();
    // Lit le prix du produit à partir de l'entrée standard et le convertit en entier
    var price = parseInt(readLine(),10);
    // Lit le rabais du produit à partir de l'entrée standard et le convertit en entier
    var discount = parseInt(readLine(),10);
    
    // Crée un objet Product avec l'identifiant et le prix du produit
    var prod1= new Product(prodID, price);
    // Affiche l'identifiant et le prix du produit
    console.log(prod1.prodID + " price: " + prod1.price);
    
    // Change le prix du produit en appliquant le rabais
    prod1.changePrice(discount);
    // Affiche l'identifiant et le nouveau prix du produit
    console.log(prod1.prodID + " new price: " + prod1.price);
}

// Définit le constructeur de l'objet Product
function Product(prodID, price) {
    // Initialise les propriétés de l'objet avec les valeurs passées en argument
    this.prodID = prodID;
    this.price = price;

    // Définit la méthode changePrice qui modifie le prix de l'objet
    this.changePrice = function(discount) {
        // Calcule le nouveau prix en soustrayant le rabais en pourcentage
        this.price = price-(discount*price/100);
        
    }
}
