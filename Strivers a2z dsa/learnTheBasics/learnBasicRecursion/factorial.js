class Solution{
    factorial(n){
        if(n===1||n===0){
            return n;
        }
        return n * this.factorial(n-1);
    }
}
(function(){
    const readlinesync= require('readline-sync');
    const n= readlinesync.questionInt("enter the number: ");
    let sol = new Solution();
    console.log(sol.factorial(n));
})();