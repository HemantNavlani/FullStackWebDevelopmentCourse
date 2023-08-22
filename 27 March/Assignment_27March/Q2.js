function manipulateString(str){
    let str2 = str.toUpperCase();
    function logString(){
        console.log(`The manipulated string is : ${str2}`);
    }
    return logString;
}
const callback = manipulateString("hello World!!")
callback();