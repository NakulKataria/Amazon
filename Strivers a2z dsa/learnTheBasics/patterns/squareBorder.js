const readlinesync= require("readline-sync");
const n = readlinesync.questionInt("Enter the number of rows");

for(let i= 1; i<=n; i++){
  let pattern="";
  for(let j=1;j<=n;j++){
    if(i===1||j===1||i===n||j===n){
        pattern+="* ";
    }else{
        pattern+="  ";
    }
  }
  console.log(pattern);
}
