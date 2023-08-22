function billsplitter (costofeachdish, peoplecount){
    let cost=0;
    for (i=0;i<costofeachdish.length;i++){
        cost+=costofeachdish[i];
    }
    let costforeach = cost/peoplecount;
    return {totalbill: cost, costperperson: costforeach};
}
let costofeachdish=[200,100,300,400];
let peoplecount = 5;
console.log(billsplitter(costofeachdish,peoplecount));