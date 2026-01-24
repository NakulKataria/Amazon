class Solution{
    countDigit(n){
        // let num= n;
        // let count = 0;
        // while(num>0){
        //     count++;
        //     num= Math.floor(num/10);
        // }
        // console.log(count);
        let num= Math.floor(Math.log10(n)+1);
        return num;
    }
}
(function(){
    let sol= new Solution();
    let n= 12.34;
    console.log(sol.countDigit(n));
})();