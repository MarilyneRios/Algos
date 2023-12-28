function cashback(data){
    let total = 0;

    for(let x of data){
        let cashForOne = x.total*x.cashback/100;
        total += cashForOne;
    }
   return total.toFixed(2);
    
    
}

const ordersList = [
    {partner: 'Carrefour', total: 57.45, cashback: 5},
    {partner: 'Amazon', total: 60.20, cashback: 3},
    {partner: 'Boulanger', total: 149, cashback: 6},
    {partner: 'Fnac', total: 84.15, cashback: 4},
 ];
 console.log(cashback(ordersList)); 
 // Expected: 16.98