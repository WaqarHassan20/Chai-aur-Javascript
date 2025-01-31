//for of loop

// ['','','']
// [{}, {}, {}]

const arr = [2, 3, 4, 5, 5];
for (const num of arr) {
  console.log(num);
}

const greetings = "Hello World";
for (const greet of greetings) {
  if (greet === " ") {
    continue;
  } else {
    console.log(`Each char is ${greet}`);
  }
}

//Maps
const map = new Map();
map.set("a", "alpha");
map.set("b", "beta");
map.set("g", "gammma");

console.log(map);
console.log(map.get("a")); //alpha

// for (const key of map) {
//   console.log(key); //gives us all the values in an array
// }
for (const [key, value] of map) {
  //Use this syntax to get value or key individually from the Map
  console.log(key, ":-", value);
}

//Iteration from objects

// const myObject = {
//   'game1': "freefire",
//   'game2': "pubg",
// };

const myObject = {
  game1: "freefire",
  game2: "pubg", //Still not iterable
};

// for (const game of myObject) {
//   console.log(game); // Objects are Not iterateable by usnig for of loop
// }

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }