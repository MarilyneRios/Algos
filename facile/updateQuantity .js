function updateQuantity(array) {
 //Modifiez la fonction afin qu’elle mette à jour la quantité de l’élément à l’index 2 avec la valeur 6.
    array[2].quantity = 6;
    return array;
}

console.log(updateQuantity([
    {
        product: "beets",
        quantity: 20,
    },
    {
        product: "green tea",
        quantity: 23,
    },
    {
        product: "basil",
        quantity: 34,
    },
]));