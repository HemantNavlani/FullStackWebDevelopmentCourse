let arr = [1,2,3,4,5]
function extract(arr) {
    const [first, second, , , last] = arr;
    return [first, second, last];

    // return [arr[0],arr[1],arr[arr.length-1]];
}
 console.log(extract(arr))