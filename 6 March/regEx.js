let pattern = 'pw';
let regExOne = new RegExp(pattern);

let flag ='gi'
//gi means global and case isensitive

let regExTwo = new RegExp(pattern,flag)

let regExThree= /pw/gi
//short way to create regex

const strToCheck = 'PW is growing at a rapid speed and recently they are working on pwskills to create skills based pwcontent'

const result = regExThree.test(strToCheck)

console.log(result);

const anotherResult = strToCheck.match(regExThree)
console.log(anotherResult)

const oneMoreResult=strToCheck.replace(regExThree,'p-w')
console.log(oneMoreResult)

const webUrl = "https://pwskills.com/hitesh%20choudary"

// const useableUrl=webUrl.replace(/%20/,'-');
const useableUrl=webUrl.replace(/%\d\d/,'-');
//  \d denotes a number 
console.log(useableUrl)


//you can see various things of regex on https://regexr.com