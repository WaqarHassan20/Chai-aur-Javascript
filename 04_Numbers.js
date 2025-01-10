// Demonstrating number types and number-related operations in JavaScript

// Creating a simple number primitive
const score = 33;
console.log(score); // Simply print the number value

// Creating a Number object with explicit constructor
const newScore = new Number(35);
console.log(newScore); // Shows the Number object with its prototype and available methods
console.log(newScore.toString().length); // Convert to string and get its length
console.log(newScore.toString()); // Convert number to string
console.log(newScore.toFixed(2)); // Format number to 2 decimal places

// Working with large numbers and formatting
const newDigit = 10000000;
const digit = 123.6564;
console.log(newDigit.toLocaleString()); // Format large number with locale-specific separators
console.log(digit.toPrecision(5)); // Specify total number of significant digits

// Mathematical operations using Math object
console.log(Math.max(624, 23, 345, 46)); // Find the maximum value
console.log(Math.min(546, 345, 255)); // Find the minimum value

// Rounding methods
console.log(Math.round(3.65)); // Standard rounding (up or down)
console.log(Math.round(3.45)); // Another rounding example
console.log(Math.floor(3.5)); // Always round down
console.log(Math.ceil(3.5)); // Always round up
console.log(Math.abs(-5)); // Get absolute value

// Generating random numbers
// Generate a random integer between 1 and 10
console.log(Math.floor(Math.random() * 10) + 1);

// Generate a random integer within a specific range
const max = 20;
const min = 10;
console.log(Math.floor(Math.random() * (max - min + 1) + min));
