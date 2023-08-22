function convertToNumber(str){
    let num = Number(str);
    if (Number.isNaN(num)){
        throw error = "Invalid Number";
    }
    return num
}

try {
  const num = convertToNumber("abc");
  console.log(num);
} catch {
  console.log(error); 
}
try {
  const num = convertToNumber("123");
  console.log(num);
} catch {
  console.log(error); 
}