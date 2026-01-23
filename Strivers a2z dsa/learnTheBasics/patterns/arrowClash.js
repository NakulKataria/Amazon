const readlinesync= require("readline-sync");
const n = readlinesync.questionInt("Enter the number of rows");

for(let i=1; i<=n; i++){
    let pattern="";
    for(let j=1; j<=n;j++){
        if(j<=i){
            pattern+="* ";
        }else{
            pattern+="  ";
        }

    }
    for(let j=1; j<=n;j++){
        if(j>=n-i+1){
            pattern+="* ";
        }else{
            pattern+="  ";
        }

    }
    console.log(pattern);
}
for(let i=1; i<n; i++){
    let pattern="";
    for(let j=1; j<=n;j++){
        if(j<=n-i){
            pattern+="* ";
        }else{
            pattern+="  ";
        }

    }
    for(let j=1; j<=n;j++){
        if(j>i){
            pattern+="* ";
        }else{
            pattern+="  ";
        }

    }
    console.log(pattern);
}