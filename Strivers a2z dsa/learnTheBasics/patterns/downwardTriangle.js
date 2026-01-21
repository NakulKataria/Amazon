const readlinesync= require('readline-sync');
const n= readlinesync.questionInt("Enter number of rows: ");
// const n = readlinesync.questionTnt("Enter the no of rows: ");  my error.
for(let i=n;i>=1;i--){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern +="* ";
    }
    console.log(pattern);
}