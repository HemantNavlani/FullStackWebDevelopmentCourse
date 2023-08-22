let items = {
    a:10,
    b:20,
    c:20,
    d:20,
    e:20,
    f:20
}

let exchangeRate = 80;
  let newRates = Object.keys(items).map((item)=>{
        return{[item]:items[item]*exchangeRate}
  });
  
  console.log("Original items: ", items);
  console.log("Converted items: ", Object.assign({}, ...newRates));