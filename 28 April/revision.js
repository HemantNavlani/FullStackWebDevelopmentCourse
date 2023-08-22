//Objects and prototypes

const user = {
    username : "hemant",
    email:"hemant@google.com"
}

//Example of destructuring
const {username,email}=user;



//Array containing objects
const myArray = [
    {
        username:"Ram",
        email:"ram@google.com"
    },
    {
        username:"Prem",
        email:"prem@google.com"
    },
    {
        username:"Krishna",
        email:"Krishna@google.com"
    }
]

myArray.map((ele)=>{
    console.log(ele.username);
});

//Important line
//Nearly all objects in JavaScript are instances of Object

let pwcourse = {
    coursename:"pw1",
    price:1299,

    getCourseDetails : function(){
        console.log(`Course name is ${this.coursename} and price is ${this.price}`)
    }
}

//Prototypes

//Gets added in all
Object.prototype.hemant = function(){
    console.log("Hemant was here");
}

//Adding in a particular thing 
pwcourse.ram= function(){
    console.log(`Jay shree ram`);
}


Array.prototype.hitesh=function(){
    console.log("Revision class of objects")
}
pwcourse.ram();

pwcourse.getCourseDetails()
pwcourse.hemant();
myArray.hemant();

const newString = "Mohan"

newString.hemant();




//Example of prototypal inheritance

myArray.hitesh();//yes accessible

// pwcourse.hitesh();//not accessible

// newString.hitesh();//not accessible




const user1 = {
    coursename:"pw2",
    price:1299
}
const user2 = {
   email:"some@gmail.com"
}
const user3 = {
    isloggedin:true
}
const user4 = {
    support:"JS Course",
   // __proto__:user1 //now user4 can access everything of user1
}
// user4.__proto__=user1 -->another way

Object.getPrototypeOf(user4,user1); // --> Most used way

