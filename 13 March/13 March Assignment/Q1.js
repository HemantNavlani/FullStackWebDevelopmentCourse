function wordsCount(str){
    const words = str.split(" ");
    
    const counts = new Map();

    for(let i=0;i<words.length;i++){
        if (!counts.has(words[i])){
            counts.set(words[i],1);
        }
        else{
            counts.set(words[i],counts.get(words[i])+1)
        }
    }
    return counts;
}


let str = "hemant is hemant and he is a good boy and he studies and play and will earn crores of rupees per year"
const count = wordsCount(str);
console.log(count)