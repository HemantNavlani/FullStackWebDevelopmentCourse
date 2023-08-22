const http = require('http')
const port = 4001;
const hostname = 'localhost'


const menProducts = [
    { id: 1, name: 'Shirt', category: 'Men' },
    { id: 2, name: 'Trousers', category: 'Men' },
    { id: 3, name: 'Shoes', category: 'Men' },
    { id: 4, name: 'Jeans', category: 'Men' },
    { id: 5, name: 'Pant', category: 'Men' },
    { id: 6, name: 'T-shirt', category: 'Men' },
    { id: 7, name: 'Watch', category: 'Men' },
    { id: 8, name: 'Cap', category: 'Men' },
    { id: 9, name: 'Chains', category: 'Men' },
    { id: 10, name: 'Wallets', category: 'Men' },
  ];
  
  const womenProducts = [
    { id: 1, name: 'Dress', category: 'Women' },
    { id: 2, name: 'Skirt', category: 'Women' },
    { id: 3, name: 'Heels', category: 'Women' },
    { id: 4, name: 'Top', category: 'Women' },
    { id: 5, name: 'Ear Rings', category: 'Women' },
    { id: 6, name: 'Make Up', category: 'Women' },
    { id: 7, name: 'Kurti', category: 'Women' },
    { id: 8, name: 'Watch', category: 'Women' },
    { id: 9, name: 'Bottoms', category: 'Women' },
    { id: 10, name: 'Shirts', category: 'Women' },
  ];
  

const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type', 'application/json');
    if (req.url=='/'){
        res.statusCode=200;
        res.end(JSON.stringify({message :"Welcome to Men & Women Dummy Data"}));
    }
    else if (req.url=='/men'){
        res.statusCode=200;
        res.end(JSON.stringify(menProducts));
    }
    else if (req.url=='/women'){
        res.statusCode=200;
        res.end(JSON.stringify(womenProducts))
    }
    else if (req.url=='/other'){
        res.statusCode=500;
        res.end('Page Not Found !! :-(')
    }
})

server.listen(port,()=>{
    console.log(`Sever listening at ${hostname}:${port}`);
})