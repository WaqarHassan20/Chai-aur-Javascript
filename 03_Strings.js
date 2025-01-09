// Declare a string variable with a name
let myGoodName = "waqar ul hassan";

// Declare an age variable
let age = 23;

// Template literal: Interpolate name (converted to uppercase) and age in a greeting
console.log(
  `Hello , My name is ${myGoodName.toUpperCase()} , and  I am ${age} years old`
);

// Create a String object (less common way of creating a string)
let myName = new String("Waqar ul Hassan");

// Replace 'ul' with '-' in the string
console.log(myName.replace("ul", "-"));

// Check if the string includes 'ali' (case-sensitive)
console.log(myName.includes("ali"));

// Extract a substring from index 1 to 5 (exclusive)
console.log(myName.substring(1, 5));

// Check if the string includes 'ul' (case-sensitive)
console.log(myName.includes("ul"));

// Convert the string to uppercase
console.log(myName.toUpperCase());

// Find the index of the first occurrence of 's'
console.log(myName.indexOf("s"));

// Extract a substring from the start to index 5 (exclusive)
console.log(myName.slice(0, 5));

// Extract the last 5 characters of the string
console.log(myName.slice(-5));

// Get the character at index 6
console.log(myName.charAt(6));

// Display the prototype of the String object
console.log(myName.__proto__);

// Access character at index 2 using bracket notation
console.log(myName[2]);

// Declare a string with extra whitespace
let newName = "   HASSAN  ";

// Remove whitespace from both ends of the string
console.log(newName.trim());

// Original string remains unchanged
console.log(newName);
