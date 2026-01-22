const readlinesync= require("readline-sync");
const n = readlinesync.questionInt("Enter number of rows: ");
for(let i=1;i<=n;i++){
    let pattern="";
    for(let j=1;j<=i;j++){
        if((i+j)%2==0){
            pattern +="1 ";
        }else{
            pattern +="0 ";
        }
    }
    console.log(pattern);       
}