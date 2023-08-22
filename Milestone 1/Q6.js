let a = "hemant navlani"
let vowels = ['a','e','i','o','u','A','E','I','O','U'];
let count=0;
for (i=0;i<a.length;i++){
    if (vowels.includes(a[i])){
        count++;
    }
}
console.log(count);