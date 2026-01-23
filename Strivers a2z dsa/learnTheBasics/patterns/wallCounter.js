// const readlinesync= require("readline-sync");
// const m=  readlinesync.questionInt("Enter the no of Walls;");
// const n=2*m-1;

// for(let i=1; i<=n; i++){
//     let pattern="";
//     for(let j=1;j<=n; j++){
//        let distance =Math.min(i,n-i-1,j,n-j-1);
//        pattern+=m-distance+" ";
//     }
//     console.log(pattern);
// }
class Solution {
    // Function to print concentric square number pattern
    pattern22(n) {
        // Outer loop for rows
        for (let i = 0; i < 2 * n - 1; i++) {
            let row = "";
            // Inner loop for columns
            for (let j = 0; j < 2 * n - 1; j++) {
                // Calculate distance from top
                let top = i;
                // Calculate distance from left
                let left = j;
                // Calculate distance from bottom
                let bottom = (2 * n - 2) - i;
                // Calculate distance from right
                let right = (2 * n - 2) - j;

                // Take the minimum of all four distances
                let minDist = Math.min(top, bottom, left, right);

                // Append number (starts with n at border, decreases inside)
                row += (n - minDist) + " ";
            }
            // Print row
            console.log(row);
        }
    }
}

// Driver code
(function () {
    // Create object of Solution class
    const sol = new Solution();

    // Define size of pattern
    const N = 5;

    // Call pattern function
    sol.pattern22(N);
})();

