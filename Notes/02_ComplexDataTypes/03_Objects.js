//There are two methods to declare objects one is like Litrals,and the other is like constructor.

//Singleton Object----> When any object is made through constructor then it's called singleton means it is the only one there is not any other object like him.

//object.create--> singleton object

//When objects are declared through literals then they can't be singlton.

//*Object literals

//todo:Interview question use symbol(dataType) as key
const mySym1 = Symbol("key1");
const mySym2 = Symbol("key2");

const jsUser = {
  name: "WaqarHassan",
  "full name": "Waqar UL Hassan",
  //!declaring a symbol key.
  mySym1: "mykey1", //This is not correct because as we know that in js processsor processes the key as a string no matter you write any kind of datatype, for instance number,boolean,symbol etc.
  [mySym2]: "mykey2",
  age: 20,
  email: "helloworld@hotmail.com",
  location: "NewYork",
  isLoggedIn: false,
  lastLoginDays: ["Monday", "Saturday"],
  3: "alpha",
};

// WRONG APPROACH TO DECLARE THE OBJECTS

console.log(jsUser.name); // Not the best aproach to print from objects what if key is a string or symbol or number?

// console.log(jsUser.full name);   //!error

//that's it is not a good approach.

console.log(jsUser["name"]); // Correct way to print something from object.
console.log(jsUser["full name"]);

//!Interview symbol question

//!That's how we declare a symbol as a key in an object.
console.log(typeof jsUser[mySym2]);

//todo:Freezing any object

jsUser["email"] = "helloworld@hotmail.com";
console.log(jsUser["email"]);
// Object.freeze(jsUser);
jsUser["email"] = "helloworld@hotmail.com";
console.log(jsUser);

//! Adding functions in object

jsUser.greeting1 = function () {
  console.log("Hello JS user ");
};

//Refrencing name in object
jsUser.greeting2 = function () {
  //Whenever we want to refrence same object then we use this
  console.log(`Hello JS user, ${this.name}`);
};
console.log(jsUser.greeting1());
console.log(jsUser.greeting2());
// console.log(jsUser.greeting); // function is not executed it's refrence is received
