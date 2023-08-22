    function removeDuplicates(cart){
    let uniqueCart=[];
    for(i=0;i<cart.length;i++){
        if (!uniqueCart.includes(cart[i])){
            uniqueCart.push(cart[i]);
        }
    }
    return uniqueCart;
  }
  let cart  = ['1','2','2','3','4','5','5'];
  let uniquecart = removeDuplicates(cart);
  console.log(uniquecart)
  
  