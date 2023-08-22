// Arrow function ke andar this ka koi bhi reference exist nhi karta


//normal function 
// let obj = {
//     x:10,
//     fun(){
//         console.log(this.x);
//     }
// }
// obj.fun();



//arrow function

//here it does not work
// let obj = {
//     x:10,
//     fun: () => {
//         console.log(this.x);
//     }
// }
// obj.fun();

//this will work 
let obj = {
  x:10,
  fun(){
    y={
        gun:()=>{
            console.log(this.x);
        }
    }

    y.gun();
  }
}
obj.fun();