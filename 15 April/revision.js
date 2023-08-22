const obj1 = {
    name:"Yash",
    role : "Student",
    isloggedIn:true,
    registerUser:function(){
        console.log(`${this.name} is a registered user !`)
    }
}

console.log(obj1.name);
console.log(obj1.role);

const obj2 = {
    10:"Number10",
    20:"Number20"
}

// const key1 = Symbol()

const key1 = Symbol("key1")
const key2 = Symbol("key2")

const obj3 = {
    [key1]:"hitesh",
    [key2]:"PWSkills"
}
console.log(obj3[key1])

const obj4 = new Object();
obj4.email="abc@gmail.com"

const obj5 = {
    name :"Shreya",
    email:"shreya@mail.com",
    isloggedIn:true
}


// Object.freeze(obj5)


obj5.email="shreya@microsoft.com"
obj5["isloggedIn"]=false
console.log(obj5)

console.log(Object.keys(obj5))

console.log(Object.values(obj5))



