//Classes in javascipt came after ECMAScript 6 ES6 before that, we did blueprinting like this.

function Product(n,p,r){
    this.name=n;
    this.price=p;
    this.rating=r;

    // return 10;//same rules for return statement as in class
    // return{x:10}
    // return this;
}


/// when the above funtion is called with new keyword then only it is called a function constructor else it is a normal function
const p = new Product("Macbook",1500000,5);
console.log(p);


/* ******
* 1. this keyword in javascript is different than other languages
* 2. this keyword refers to the context from where we called
* 
* in the function constructor also 
* - if you return primitive it is ignored and we return the object referred by this
* - if you return a custom object, then the custom object is returned
* - if you don't return anything, the object reffered by this is returned 
*/


let x = {
    p:Product
};

x.p( "airpods",20000,5);
console.log(x)