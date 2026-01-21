//JavaScript handles basic input and output differently depending on the environment,such as browsers or Node.js.
//  In browsers, common methods use browser dialogs and DOM manipulation, while Node.js relies on console methods or libraries.

// Browser Output Methods
// Use console.log() for debugging output visible in browser developer tools. 
// For displaying content on a webpage, document.write() outputs directly to the page (though it's less common now),
//  or update elements with document.getElementById("id").innerHTML = "text";.
// ​

// Browser Input Methods
// The prompt("message") function displays a dialog box for user string input and returns the value entered. 
// Use confirm("message") for yes/no decisions, which returns true or false. 
// For forms, retrieve values via document.getElementById("inputId").value.


// Node.js Examples
// In Node.js, output with 
console.log("Hello, World!"); // prints to the console.
// For input, use the readline module: 
const readline = require('readline-sync'); 
let name = readline.question('Enter name: '); //(requires installing readline-sync)