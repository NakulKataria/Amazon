// const readline = require('readline');

// const rl = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });
class solution{
    
    reverse(arr, rev=[]){
    if (arr.length===0) return rev;
       rev.push(arr.pop());
        return this.reverse(arr,rev);
    }
   
}
// (function(){
//     let sol = new solution();
//     sol.askForInput();
//     console.log(sol.reverse());
// })();

const readlinesync= require('readline-sync');
let userArray= readlinesync.question('Enter the numbers seprated by , : ').split(",").map(Number);
let sol= new solution();
console.log(sol.reverse([...userArray]));
    
