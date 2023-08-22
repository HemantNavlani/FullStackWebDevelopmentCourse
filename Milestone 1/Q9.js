let arr= [9,5,6,11,15,7,8,12];
for(i=0;i<arr.length;i++){
    if (arr[i]%3==0 && arr[i]%2!=0){
        console.log(arr[i]);
    }
    continue;
}