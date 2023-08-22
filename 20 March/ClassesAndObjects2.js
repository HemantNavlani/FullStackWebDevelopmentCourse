class Product{
    //properties and behaviour

    //properties -> variables -> data member
    // name;
    // price;
    // rating;


    // constructor(){
    //     console.log("Calling the constructor")
    // }
//now default contructor is not used while creating a new object


//Constructor with arguments

constructor(n,p,r){
    console.log("Calling the constructor");
     //this keyword

     //if this keyword is used we can directly create properties with this hence the above,
     // defined properties are commented and directly created with this 
    this.name=n;
    this.price=p;
    this.rating=r;

   
    // return 10;//if you are returning primitive then it will be avoided in constructor 
    // return {x:10,y:20};//if you return nonprimitive then it will be returned
    // return this;//its by default no need to write
    // generally we don't return in constructor

    // **** Only one custom constructor can be written inside one class in javascript other languages allows this if not written default constructor will be used 
}

    //behaviours -> functions -> memeber functions

    display(){
        console.log("this refers to", this);
        console.log("Diplaying the current product",this.name,this.rating,this.price);
    }
}

// const p = new Product();// new creates an empty plain object

// in the above piece of code we are calling the constructor method 
// console.log(p);
// p.display();

const p1 = new Product("Iphone",1000000,5);
console.log(p1);
p1.display();
console.log(p1.name);