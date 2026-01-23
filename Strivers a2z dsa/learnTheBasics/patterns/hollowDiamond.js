const readlinesync= require("readline-sync");
const n= readlinesync.questionInt("Enter the half number of rows:");
// const n=m/2;
for(let i =1;i<=n;i++){
    let pattern="";
    for(let j=1; j<=n;j++){
        if(j>n-i+1){
            pattern+="  ";
        }else{
            pattern+="* ";
        }
    }
    for(let j=1; j<=n;j++){
        if(i>j){
            pattern+="  ";
        }else{
            pattern+="* ";
        }
    }
   console.log(pattern);
}

for(let i =1;i<=n;i++){
    let pattern="";
    for(let j=1; j<=n;j++){
        if(j>i){
            pattern+="  ";
        }else{
            pattern+="* ";
        }
    }
    for(let j=1; j<=n;j++){
        if(j<=n-i){
            pattern+="  ";
        }else{
            pattern+="* ";
        }
    }
   console.log(pattern);
    
}