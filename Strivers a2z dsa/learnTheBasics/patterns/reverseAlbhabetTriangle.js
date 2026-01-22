const readlinesync= require("readline-sync");
const n= readlinesync.questionInt("Enter number of rows: ");
for(let i=n;i>=1;i--){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern +=String.fromCharCode(64 + j)+" ";
    }
    console.log(pattern);
}