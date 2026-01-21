//types of functions in javascript
// JavaScript supports multiple function declarations and expressions.

// Function Declaration: Hoisted, named functions: 

function add(a, b) { return a + b; }


// Function Expression: Assigned to variables: 
const multiply = function(a, b) { return a * b; };

// Arrow Functions (ES6): Concise, no own this:
 const square = x => x * x;

// Immediately Invoked (IIFE): Self-executing: 

(function() { console.log("Runs now"); })();

// Generator Functions: Yield values:
function* gen() {
  yield 1;
  yield 2;
}

// Async Functions: Handle promises:
async function fetchData() {
  return await apiCall();
}

// Pass-by-Value vs Reference
// Primitives copy the value; 
// objects share the reference.
