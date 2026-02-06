const readline= require("readline-sync");
const n = readline.questionInt("enter the no to find fibbonacci :");
console.log(fib(n));
function fib(num){
    if(num ===0|| num===1) return 1;
    return fib(num-1) +fib(num-2);

}