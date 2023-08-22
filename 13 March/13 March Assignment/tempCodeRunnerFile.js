let arr = [1,2,3,4,,5]
 function extract(arr) {
    return [arr[0],arr[1],arr[Array.length(arr)]];
 }
 console.log(extract(arr))