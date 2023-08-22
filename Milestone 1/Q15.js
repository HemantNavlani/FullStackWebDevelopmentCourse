let originalPrice = 111;
let discountedPrice = 97;

const discountPercent = (originalPrice,discountedPrice) =>{
    return (((originalPrice-discountedPrice)/originalPrice)*100).toFixed(2);
}
console.log(discountPercent(originalPrice,discountedPrice));