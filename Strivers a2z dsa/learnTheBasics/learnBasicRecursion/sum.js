class Solution{
    sum(n){
        if(n===1){
            return 1;
        }
        return n+this.sum(n-1);
    }
}
(function(){
    const readlinesync= require('readline-sync');
    const n= readlinesync.questionInt("enter the number: ");
    let sol = new Solution();
    console.log(sol.sum(n));
})();