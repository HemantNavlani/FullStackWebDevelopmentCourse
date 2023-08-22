let marks = [22,99,12,32,43]
console.log(marks)
let max = -1;
for (i = 0;i<marks.length;i++){
    marks[i]>max ? max = marks[i]:max;
}
console.log(max);