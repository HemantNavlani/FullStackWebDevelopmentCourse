// //creating a promise
// const promiseOne = new Promise(function(resolve,reject){
//  //Do an async task
//  //DB call, cryptography
//  setTimeout(function(){
//     console.log("Async task is completed")
//     resolve()
//  },1000)
// })


// //consuming a promise

// promiseOne.then(function(){
//     console.log("Promise consumed");
// })



// new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log("Async task 2")
//         resolve();
//     },1000)
// }).then(function(){
//     console.log("Promised consumed 2")
// })


// const promiseThree = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         //DB call to get all users from database
//         resolve({username:"Dilip",email:"d@pw.live"})
//     },1000)
// })

// promiseThree.then(function(user){
//     console.log(user)
// })


// const promiseFour = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         // let error = true;
//         if(!error){
//             resolve({username:"Hemant",email:"h@pw.live"});
//         }else{
//             reject("Error: Something went wrong");
//         }
//     },1000)
// })

// //we can use like this also 
// // promiseFour.then().then().catch() -->chaining
// promiseFour
// .then((user)=>{
//     console.log(user);
//     return user.username;
// })
// .then((name)=>console.log(name))  //chaining
// .catch(function(error){
//     console.log(error);
// })
// .finally(()=> console.log("The promise is either resolved or rejected"))


// const promiseFive = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         let error = false;
//         if(!error){
//             resolve({username:"Navlani",email:"h@pw.live"});
//         }else{
//             reject("Error: Something went wrong");
//         }
//     },1000)
// })

// async function consumePromiseFive(){
//     const response = await promiseFive;
//     console.log(response)
// }
// consumePromiseFive()


//getting data by async await function
async function getAllUsers(){
    const response = await fetch('https://jsonplaceholder.typicode.com/users')
    //response comes in string format so we convert in into json format
    const data = await response.json();
    console.log(data)
}
getAllUsers();


// //getting data by promises
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(function(response){
//     return response.json();
// })
// .then(data => console.log(data))
// .catch((error)=>console.log(error))
