function doubled(arr,callback) {
   const doubledarr =  arr.map(callback);
   return doubledarr;
}

const arr = [1,2,3,4,5]
let callback = x =>x*2
console.log(doubled(arr,callback));
