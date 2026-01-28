class Solution{
    checkPalindrome(num){
        let n=num;
        let check=0;
        while(n>0){
            check=(check*10)+(n%10);
            n=Math.floor(n/10);
        }
        if(check===num){
            return true;
        }
        return false;
    }
}

(function(){
  readlinesync= require('readline-sync');
  num = readlinesync.questionInt("Enter no to check palindrome:");
  let sol = new Solution();
  console.log(sol.checkPalindrome(num));
})();


// /**
//  * @param {number} x
//  * @return {boolean}
//  */
// var isPalindrome = function(x) {    
//     const str = String(x);
//     return String(x).split('').reverse().join('') === str;
// };
// process.on("exit", () => {
//     require("fs").writeFileSync("display_runtime.txt", "0");
// })