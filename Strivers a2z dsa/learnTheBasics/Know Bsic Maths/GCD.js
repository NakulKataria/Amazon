class Solution{
    hcf(x,y){
       if(y>x){
        return this.hcf(y,x)
       }
       let mod =x%y;
       while(mod!=0){
        x=y;
        y=mod;
        mod =x%y;
       }
       return y;
    }
}
(function( ){
    readlinesync= require('readline-sync');
    
    num1= readlinesync.questionInt('Enter number 1:');
    num2= readlinesync.questionInt('Enter number 2:');
    let sol= new Solution();
    console.log(sol.hcf(num1,num2));
})();

