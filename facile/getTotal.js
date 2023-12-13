function getTotal(cart) {
    let total = 0;
    
    for (let i = 0; i < cart.length; i++){
       
       // produit = qtité * price
       let produit = cart[i].price*cart[i].quantity;
       //sum produit
       total += produit; 
    }
    
    return total;
}

const exampleCart = [
    { name: 'iPhone', price: 909, quantity: 1 },
    { name: 'Samsung Galaxy', price: 799, quantity: 3 },
    { name: 'Steam Deck', price: 419, quantity: 10 },
];
console.log(getTotal(exampleCart));
// Expected: 7496
