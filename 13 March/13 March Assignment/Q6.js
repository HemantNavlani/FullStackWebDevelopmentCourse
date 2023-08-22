const person = {
    name: "Mithun",
    age: 21,
    address: {
      street: "B8, Block B, Industrial Area.",
      city: "Sector 62, Noida",
      state: "Uttar Pradesh"
    }
};


function extractNameAndStreet({ name, address: { street } }) {
    return { name, street };
}
  
const { name, street } = extractNameAndStreet(person);
   
const a = extractNameAndStreet(person);
console.log(a.name)
console.log(a.street);
console.log(name); 
console.log(street); 