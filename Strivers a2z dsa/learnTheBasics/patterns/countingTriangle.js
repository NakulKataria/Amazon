const readlinesync= require("readline-sync");
const n= readlinesync.questionInt("Enter number of rows: ");
let count=0;
for(let i=1;i<=n;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern += ++count+" ";
    }
    console.log(pattern);
}