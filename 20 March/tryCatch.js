// try {
//     let x =undefined
//     console.log(x[0]]) //it is a type error
// }
// catch{
//     console.log("Error handling in catch");
// }
// finally{
//     console.log("finally always gets executed")
// }
// console.log("End")



try {
    let x =undefined
    console.log(x[0])
}
catch(err){//we can take error as argument then use it (its optional)
    console.log("Error handling in catch",err);//it gives details of the error in try
}
finally{
    console.log("finally always gets executed")
}
console.log("End")