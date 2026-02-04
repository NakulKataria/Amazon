

class Solution{
    isPrime(n){
        if(n<1){
            console.log('entervalid input')
                return false;
            
        }
        if(n===1){
            return  true;
        }
       const m =Math.sqrt(n);
       let count =0;
       for(let i=1; i<=m; i++){
        if(n%i===0 && i!==n/i){
            count+=2;
        }else if(n%i===0){
           count++;
        }
       }
       return count===2?true:false;
    }
}

(function(){
    const readlinesync= require('readline-sync');
    const n= readlinesync.questionInt('Enter an integer');
    let sol= new Solution();
   console.log( sol.isPrime(n));

})();