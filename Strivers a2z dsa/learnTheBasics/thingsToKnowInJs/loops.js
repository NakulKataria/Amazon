//for loop
//used when the number of iterations is known
//entry control loop
for (let i = 0; i < 5; i++) {
  console.log(i);
}

//while loop
//checks the condition before executing the block
//entry control loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

//do-while loop
//executes the block at least once before checking the condition
//exit control loop
let k = 0;
do {
  console.log(k);
  k++;
} while (k < 5);

//for...of loop
//iterates over iterable objects like arrays
const array = [1, 2, 3, 4, 5];
for (const value of array) {
  console.log(value);
}

//for...in loop
//iterates over the properties of an object
const obj = { a: 1, b: 2, c: 3 };
for (const key in obj) {
  console.log(key, obj[key]);
}

//forEach loop
//executes a provided function once for each array element
array.forEach((value) => {
  console.log(value);
});

//break statement
//exits the loop prematurely when a certain condition is met
for (let i = 0; i < 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

//continue statement
//skips the current iteration and continues with the next one
for (let i = 0; i < 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}   
//nested loops
//a loop inside another loop
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 2; j++) {
    console.log(i, j);
  }
}
//infinite loop
//a loop that never ends unless externally stopped
// while (true) {
//   console.log("This loop will run forever");
// }
// (Uncomment the above line to see the infinite loop in action, but be cautious as it will run indefinitely)