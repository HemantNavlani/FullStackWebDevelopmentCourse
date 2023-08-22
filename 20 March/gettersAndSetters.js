class Product{
    #rating;
    constructor(n,p,r){
        console.log("Calling the constructor");
        this.name=n;
        this.price=p;
        this.#rating=r;
    
    
    }

    // getRating(){
    //     console.log(this.#rating);
    // }
    // setRating(r){
    //     if(r<0){
    //         return;
    //     }
    //     this.#rating=r;
    // }

    // other way of getter and setter 

      get ratingGetter(){
        console.log(this.#rating);
    }
    set ratingSetter(r){
        if(r<0){
            return;
        }
        this.#rating=r;
    }

    
        display(){
            console.log("Diplaying the current product",this.name,this.#rating,this.price);
        }
    }
    
    const p = new Product("Iphone",1000000,5);
    console.log(p);
    // p.setRating(10);
    // p.getRating();
    p.display();
    p.ratingSetter=10;
    p.ratingGetter;
