/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    const INT_MAX = 2 ** 31 - 1;
   const INT_MIN = -(2 ** 31);

   let sign = x < 0 ? -1 : 1;
   x = Math.abs(x);

   let result = 0;

   while (x > 0) {
       result = result * 10 + (x % 10);
       x = Math.floor(x / 10);
   }

   result *= sign;

   if (result < INT_MIN || result > INT_MAX) return 0;
   return result;
   
};