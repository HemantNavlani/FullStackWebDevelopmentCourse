function getPerson(person) {
    if (!person || typeof(person)!=="object" || !("name" in person) || !("age" in person)){
        throw new Error("Invalid Parameter Type")
    }
    return `Name : ${person.name} and Age :${person.age}`;
}


try{
    let a = getPerson({name:"mithun",age:20});
    console.log(a);
}
catch(error){
console.log(error);
}

try{
    console.log(getPerson({name:"mithun"}))
    }
    catch(error){
    console.log(error.message);
    }

try{
     console.log(getPerson(["name","mithun"]))
           }
        catch(error){
        console.log(error.message);
        }