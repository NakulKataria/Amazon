const readlinesync= require("readline-sync");
const n = readlinesync.questionInt("Enter number of rows:");
for(let i=1;i<=n;i++){
    let pattern="";
    for (let j=1;j<=i;j++){
        pattern+=j+" ";
    }
    for (let j=i+1;j<=2*n-i;j++){
        pattern+="  ";

    }
    for (let j=i;j>=1;j--){
        pattern+=j +" ";
    }
    console.log(pattern);
}