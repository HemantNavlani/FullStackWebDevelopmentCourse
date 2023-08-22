function sayHello(){
    console.log("Hello")
    console.log("Hemant")
}
function addTwonum(num1,num2){
    console.log("Hello")
    let result = num1+num2;
    return result;
    // console.log("Hello")
}
// const result = addTwonum(4,4);
// console.log(result);


function subtractTwoNum(num1,num2){
    // let result  = num1-num2;
    // return result
    return num1-num2
}
// console.log(subtractTwoNum(3,2))


// function registerUser(user){
//     // if (user===undefined){
//     //     return "Please pass the username"
//     // }
//     if (!user){
//         return "Please pass the username"
//     }
//     return user + ' is registered at PW'
// }

function registerUser(user="Ritu"){
//here default value is given
    return user + ' is registered at PW'
}
// console.log(registerUser("Hemant"));
// console.log(registerUser());




//Amazon shopping cart
//Creating total bill of the user
function cartBilltotal(...numbers){
    //take a variable total
    let total = 0;
    //loop all values and keep adding to total
    for (const num of numbers){
        total+=num;
    }
    //return total
    return total;
}


const user = {
    id: "123",
    name: "Rishav",
    email: "rishav@pw.live"
}
function adduser(obj){
    console.log(`A user name ${obj.name} got an email ${obj.email}`)
}
// adduser(user)

function addv2(num1,num2){
    return num1+num2;
}

const addv3 = (num1,num2) => {
        return num1 +num2;
}

const addv4 = (num1,num2) =>   num1+num2 //here it is known as implicit return



const addv5 = num1 => 5


const addv6 = num1 => ({email:"abc@email.com"});
//returning object using implicit return


const addv7 = (num1,num2) => ({email:"abc@email.com"},{name:"abc"})



function learning(){
    console.log(this)
}

const learning2 =()=>{
    console.log(this)
    //arrow function ke andar this nhi hota hai but it can access the global this which is empty in node but it is not empty in browser, it has window object
}
learning()
learning2()

