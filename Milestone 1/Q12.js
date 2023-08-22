function rentalcost(days,cartype){
    if (cartype=="economy") return days*4000;
    else if (cartype=="midsize") return days*10000;
    else if (cartype=="luxury") return days*20000;
    else return "invalid Car Type";
}
let days = 10;
cartype="economy";
console.log(rentalcost(days,cartype));