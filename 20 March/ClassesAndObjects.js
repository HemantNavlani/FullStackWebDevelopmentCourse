class Product{
    //properties and behaviour
    



    //properties -> variables -> data member
    name;
    price;
    rating;

    //behaviours -> functions -> memeber functions

    display(){
        console.log("Diplaying the current product")
    }
}

const p = new Product();// new creates an empty plain object

console.log(p);
p.display();
