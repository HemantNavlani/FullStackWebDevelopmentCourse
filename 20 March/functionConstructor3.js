const Product = (n,p,r) => {
    this.name=n;
    this.price=p;
    this.rating=r;
}
const p = new Product("iphone",100000,5);
console.log(p)
//Arrow functions can't be used here 
//The theory of this keyword pointing to calling context is not applicable with arrow function