

class Solution{
    divisor(n){
        if(n<0){
            console.log('all te values can be both negative and positive');
        }
        let arr= []
        if(n===0||n===1){
            return  arr.push(n);
        }
       const m =Math.sqrt(n);
       
       for(let i=1; i<=m; i++){
        if(n%i===0 && i!==n/i){
            arr.push(i);
            arr.push(n/i);
        }else if(n%i===0){
            arr.push(i);
        }
       }
       return arr;
    }
}

(function(){
    const readlinesync= require('readline-sync');
    const n= readlinesync.questionInt('Enter an integer');
    let sol= new Solution();
   console.log( sol.divisor(n));

})();