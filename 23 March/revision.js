//Conditionals
// if (condition){
    //statement
// }

//Examples


// if(1==1){
    // console.log("Statement Executed");
// }


// let userToken = "newValue"
// let userToken = ""
// let userToken = undefined
// let googleAuthToken = "googletoken"
// let googleAuthToken = ""
// if (userToken || googleAuthToken){
//     console.log("User allowed to login")
// }
// else{
//     console.log("Please login to get your token")
// }
// console.log("Outside the scope");


// let isPWStudent = false
// let isPWEmployee = true
// if (isPWStudent){
//     console.log("Verified you are PW Student")
// }
// else if (isPWEmployee){
//     console.log("Congrats, you are PW employee")
// }
// else{
//     console.log("Sorry details not found");
// }



// let isLoggedIn = true
// let isLoggedIn = false


//Ternary operator
// condition ? true statements : false statements

// isLoggedIn ? console.log("Logout"):console.log("Login");




//Switch Case Statements 

// switch (expression) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// let month = 4;

// switch (month) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;    
//     case 3:
//         console.log("Wednesday");
//         break;
//     case 4:
//         console.log("Thursday");
//         break;  
//         // continue; // continue cannot be used
//     case 5:
//         console.log("Friday");
//         break;
//     case 6 :
//         console.log("Saturday");
//         break;
//     default:
//         console.log("Holiday")
//         break;
// }


//Loops

//For Loop

// for(initialization,condition, changer){
    //statements
// }


//Example
// for (let index=0;index<array.length;index++){
//     const element = array[index];
// }


// for (let i=0;i<=5;i++){
//     console.log(`Value of i is ${i}`);
// }

// let i=1
// for (i;i<=5;i++){
//     console.log(`Value of i is ${i}`);
// }

let arr = ["PW","PW Skills","Internship","PW Labs","Gate Wallah"]

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     // console.log(element);
//     console.log(arr[index])
// }


// forin loop

// for (const key in object) {
  //statements
// }

// let obj = {
//     name: "pwstudents",
//     course : "fsjs",
//     duration :100
// }



// for (const i in obj) {
//     console.log(`${i} - ${obj[i]}`);
// }



//For of loop 
// for (const iterator of object) {
//     //statements
// }


for (const ite of arr) {
    console.log(ite)
}

//while loop
let newi=0;
while(newi<=5){
    console.log(`Value of i is : ${newi}`);
    newi=newi+1;
}

//do while loop
// do {
    
// } while (condition);