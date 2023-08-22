function ageInDays(object) {
    let fullName = object.firstName+" "+object.lastName;
    let ageInDays = object.age*365;
    return function (){
        console.log(`"The person's full name is ${fullName} and their age in days is ${ageInDays}."`)
    }
}

let object = {
    firstName : "Hemant",
    lastName: "Navlani",
    age:19
}

let person = ageInDays(object);
person();