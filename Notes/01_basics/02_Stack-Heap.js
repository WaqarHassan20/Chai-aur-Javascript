// Understanding Stack and Heap in JavaScript

// Primitive Types (Stack Memory)
// Primitive types are stored directly in the stack memory
// Examples: Number, String, Boolean, null, undefined, Symbol

// Example of primitive types in stack
let name = "John"; // String stored in stack
let age = 30; // Number stored in stack
let isStudent = true; // Boolean stored in stack

// Primitive types are copied by value
let originalNumber = 42;
let copiedNumber = originalNumber; // Creates a new copy in stack
copiedNumber = 100; // Changing copiedNumber does not affect originalNumber

console.log(originalNumber); // Output: 42
console.log(copiedNumber); // Output: 100

// Reference Types (Heap Memory)
// Reference types are stored in the heap memory
// Examples: Objects, Arrays, Functions

// Example of reference types in heap
let person = {
  name: "Alice",
  age: 25,
};

// Reference types are copied by reference
let anotherPerson = person; // Both variables point to the same object in heap
anotherPerson.name = "Bob"; // Modifies the original object

console.log(person.name); // Output: "Bob"
console.log(anotherPerson.name); // Output: "Bob"

// Demonstrating stack and heap behavior with an array
let fruits = ["apple", "banana"]; // Array stored in heap
let moreFruits = fruits; // Reference to the same array

moreFruits.push("orange"); // Modifies the original array

console.log(fruits); // Output: ["apple", "banana", "orange"]
console.log(moreFruits); // Output: ["apple", "banana", "orange"]

// Memory Management Example
function createObject() {
  // Object created in heap
  let tempObject = {
    id: Math.random(),
    data: "Temporary data",
  };
  return tempObject;
}

let obj1 = createObject();
let obj2 = createObject();

console.log(obj1); // Different objects in heap
console.log(obj2); // Different objects in heap
