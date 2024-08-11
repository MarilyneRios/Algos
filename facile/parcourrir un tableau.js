function validateOrders(orders) {
    // Insert your code here
    for (let i=0; i <orders.length; i++){
        if (orders[i].stock >= orders[i].quantity){
            console.log("Order validated: " + orders[i].product);
        }
    }
}
// result: true

validateOrders([
    {
        product: "shoes",
        quantity: 2,
        stock: 10,
    },
    {
        product: "flowers",
        quantity: 12,
        stock: 8,
    },
    {
        product: "wallets",
        quantity: 1,
        stock: 0,
    },
]);