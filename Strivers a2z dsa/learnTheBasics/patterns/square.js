const readlineSync = require('readline-sync');
const n= readlineSync.questionInt("Enter number of rows: ");
for(let i=1;i<=n;i++){
    let pattern="";
    for(let j=1;j<=n;j++){
        pattern +="* ";
    }
    console.log(pattern);
}