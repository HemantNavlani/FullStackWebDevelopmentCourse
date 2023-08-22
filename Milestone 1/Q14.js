
let cart = [{unitprice:100,quantity:10},{unitprice:200,quantity:20},{unitprice:300,quantity:30}];


const bill = (cart) => {
    let total=0;
    for( i=0;i<cart.length;i++){
        total+=cart[i].unitprice*cart[i].quantity;
    }
    return total;
}
console.log(bill(cart));

