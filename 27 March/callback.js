// //Callbacks
// //This is example of synchronous callback
// Means code runs line by line 
// function h (x,fn){
//     // h-> h is a higher order function
//     //fn -> callback
//     console.log(x*x);
//     fn(x*x);
// }

// // h(10,function(){
// //     console.log("Done with callback")
// // })

// h(10,exec);
// function exex (n){
//     console.log("Squared value is ",n);
// }


//This asynchronous callback

// Asynchronous piece of code
// console.log("start")
// setTimeout(function f(){
//     console.log("Timer done");
// },3000);
// console.log("end")

//yaha pe ye wait nhi karta settimeout ke liye vo simply aage badh gaya lekin for loop ke case me agar jyada time bhi lagega 
//vo tab bhi rukega, aise kyun ??
//Aisa isliye kyunki javascript me as a language kafi basic cheeze hi h and for loop me javascript ke native code ka part hai 
//but setTimeout uske native code ka part nhi h therefore vo is cheeze ko runtime me chodh deta h aur aage kam karta h aur jab vo finish ho jaye to 
//usse start kar deta hai

//setTimeout ek runtime feature hai



// console.log("start")
// setTimeout(function f(){
//     console.log("Timer done");
// },500);
// console.log("end")
// for(let i=0; i<10;i++){
// console.log("Phle mai hi khatam hunga ")
// }
//yaha pe jo hai timer backend pe chalke complete toh hogaya but tabhi for loop chaleja raha h toh uske beech me vo nhi aa skta 
//phle for loop khatam hoga fir hi timer done aayega, chahe timer zero second ka ho






console.log("start")
setTimeout(function f(){
    console.log("Timer done 1 ");
},100);//here this timer starts in runtime environment
setTimeout(function f(){
    console.log("Timer done 2");
},0);//this also starts in runtime environment 

//since 2nd timer executes first it goes to macrotask/callback queue first and since queue is based on FIFO principle, the output of 1st timer displays first

console.log("end")
for(let i=0; i<10;i++){}