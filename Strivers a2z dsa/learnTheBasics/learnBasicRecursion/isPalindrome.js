const readline= require('readline-sync');
let userString= readline.question('Enter the text to check: ');
console.log(isPalindrome(userString));

function isPalindrome(str){
    if(str.length===0||str.length===1)return true;
    let s= str;
    let j = str.length -1;
    let i=0;
    while(!isAlphaNumeric(s.charAt(i)) && i<j)i++ ;
    while(!isAlphaNumeric(s.charAt(j))&& i<j) j-- ;
    if (i >= j) return true;
    if(s.charAt(i).toLowerCase()=== s.charAt(j).toLowerCase()) return isPalindrome(s.slice(i+1,j));
    return false;

}

// function isPalindrome(str){
//     let s=str;
//     let j = str.length;
//     let i =0;
//    if(j===0|| j===1)return true;
//     while(!isAlphaNumeric(s.charAt(i)) && i<j) i++;
//     while(!isAlphaNumeric(s.charAt(j-1)) && i<j) j--;
//     if (s.charAt(i)===s.charAt(j-1) && i<j){
//         isPalindrome(s.slice(i,j-1))
//     }else{
//         return false
//     }

// }
function isAlphaNumeric(ch) {
    return /^[a-zA-Z0-9]$/.test(ch);
}