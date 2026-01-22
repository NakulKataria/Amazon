const readlinesync= require("readline-sync");
const m = readlinesync.questionInt("Enter number of rows: ");
for(let i=m;i>=1;i--){
    let pattern="";
    for(let j=1;j<=i;j++){
        pattern +=j+" ";
    }
    console.log(pattern);
}