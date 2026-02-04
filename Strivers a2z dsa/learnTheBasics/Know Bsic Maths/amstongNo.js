class Solution{
    isAmstrong(num){
        if(num===0) return true;
        let arr =[];
        let i=0
        let n = num;
        let checkSum=0;
        while(n>0){
            arr[i++]=n%10;
            n=Math.floor(n/10);
            
        }
        for(let j=0; j<arr.length;j++){
            checkSum+=Math.pow(arr[j], arr.length);
            // console.log(arr[i]*arr.length);
        }
         
        return num == checkSum;

    }
}
(function(){
    const readlinesync= require('readline-sync');
    let num=readlinesync.questionInt("Enter the number to check");
    let sol = new Solution();
    console.log(sol.isAmstrong(num));
})();