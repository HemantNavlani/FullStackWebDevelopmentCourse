function Filter(products) {
    return function(category){
      return products.filter(el=>el.category===category)
    }
}

let products=[
    {name:"Shirts",category:"Clothing"},
    {name:"Pants",category:"Clothing"},
    {name:"Hats",category:"Accessories"},
    {name:"Sunglasses",category:"Accessories"}
]
let clothingProducts = Filter(products)("Clothing");
console.log(clothingProducts);