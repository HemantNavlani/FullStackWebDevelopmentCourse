// //+++++++++++++++++++++
//Set -> Its just like sets of maths
//Read Sets from MDN
// let emptySet = new Set();

// // console.log(emptySet.size);

// let myArray=[1,2,3,4,3,2]
// // let newSet = new Set(myArray);
// let newSet = new Set([...myArray]);
// //repetetion not allowed
// console.log(newSet);

// newSet.add(2);
// newSet.clear();
// console.log(newSet);
// console.log(newSet.has(2));


// // Set Difference 
// function setDiffernce(setA,setB){
//    return new Set([...setA].filter(el => !setB.has(el)));
// }

//+++++++++++++++++++++++++++++++++++++++++++++
//Map
//Read map on MDN

let map = new Map();
console.log(map.size);


let arr = [
    [1,"Hemant"]
    [2,"Kunal"]
    [3,"Savit"]
    [4,"Om"]
    [5,"Vishal"]
]

arr.map((arrayItem)=>map.set(arrayItem[0],arrayItem[1]));
