let userdeatails={name: "Ram" , balance: 10000};
// let request = "deposit";
let request = "withdrawl";
let amount = 1000;

if (request=="deposit"){
    userdeatails.balance+=amount;
}
else if (request=="withdrawl"){
    userdeatails.balance-=amount;
}
console.log(Object.values(userdeatails));