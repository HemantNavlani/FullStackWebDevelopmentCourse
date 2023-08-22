let arr = [1,2,3,4,5];
function maxmin(arr){
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    return {max,min};
}

console.log(maxmin(arr));