let arr = [1,2,3,4,2,1,3];

function removeDuplicates(arr){
    const set = new Set(...arr);
    return set;
}

console.log(removeDuplicates([arr]));