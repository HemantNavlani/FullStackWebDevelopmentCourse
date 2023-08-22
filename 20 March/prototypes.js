let myHeros = ["thor","spiderman"]
let dcHeros = ["batman","flash","superman"]

let heropower={
    thor: "hammer",
    spideman: "sling",
    getSpidermanPower: function(){
        console.log(`Spidy power is ${this.spideman}`);
    }
}

//Injecting hitesh in all objects
Object.prototype.hitesh=function(){
    console.log("Hitesh is present in all objects")
}

console.log(myHeros.hitesh());
console.log(heropower.hitesh());


// giving heyhitesh only to arrays
Array.prototype.heyHitesh = function(){
    console.log("Hitesh says Hi");
}

console.log(myHeros.heyHitesh());
// console.log(heropower.heyHitesh());

//Inheritance

const User = {
    name : "topname",
    email : "top@gmail.com"
}
const Teacher = {
    makeVideos : true
}
const TeachingSupport = {
    isAvailable : false
}
const TAAssistant = {
    makeAssignment : "JS Assignment",
    fulltime : true,
    __proto__: TeachingSupport //inherited property(older way )
}

//outside bhi inheritance kar skte h 
// Teacher.__proto__=User//olderway

//new way
Object.setPrototypeOf(TeachingSupport,Teacher);

console.log(TAAssistant.isAvailable)


String.prototype.truelength = function(){
    console.log(`True length is ${this.trim().length}`);
}

"hitesh       ".truelength()
"anurag        ".truelength()