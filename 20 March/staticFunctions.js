class Product{
#rating;
constructor(n,p,r){
    console.log("Calling the constructor");
    this.name=n;
    this.price=p;
    this.#rating=r;


}

//********** */
static custom (){
    console.log("Calling a static  method  ")
}
//********** */

    display(){
        console.log("Diplaying the current product",this.name,this.#rating,this.price);
    }
}

const p = new Product("Iphone",1000000,5);

// console.log(p);
// p.display();

//we cannot do 
// p.custom();

// we have to do 
Product.custom();

//static methods classes ke sath attached hote hai 


//--------------------



console.log(p.name)
p.name="samsungS23"
console.log(p.name)
//here the name gets updated but there might be a need that we don't want it to get updated so we can use declare something as private for example rating above is private , it cannot be changed

console.log(p);
//ab rating display bhi nhi ho rahi h 

console.log(p.rating);
//it cannot be used, it is undefined

// console.log(p.#rating);
//it cannot be used, its a syntax error
p.display();
//ye rating ko access kar skta h kyunko class me hi likha h ye 

p.rating=10;
//it does not updates

p.display();