const user = {
  username: "Waqar Ul Hassan",
  loginInfo: 8,
  signedIN: true,
  getUserDetails: function () {
    // console.log("Got user details from database");
    //   console.log(`Username:${username}`);//username is not defined bcz we didn't told that which username.
    console.log(`Username:${this.username}`); //Now username is printed bcz we told the the context by using this keyword.
    console.log(this);
  },
  getUserDetails1: () => {
    console.log(this); //Current contex will be empty becz arrow can't get value from upper side.
  },
};

console.log(user.getUserDetails());

console.log(user.username);

console.log(user.getUserDetails1());

console.log(this); //if we use this in global context we will receive empty object{} in node environment but if we use in browser then it will give us window object.

//CONSTRUCTOR FUNCTION

// NEW AND THIS ARE CONSTRUCTOR FUNCTIONS

//new key allow us to make new and multilple instance of same object and also to make new execution context.
const promiseOne = new Promise((resolve, reject) => {});
const date = new Date();

function User(username, loginCount, isLoggedIn) {
  this.username = username;
  this.loginCount = loginCount;
  this.isLoggedIn = isLoggedIn;

  this.greeting = function () {
    console.log(`Welcome ${this.username}`);
  };

  return this;
}
console.log(User.constructor);
const userOne = new User("Waqar", 7, true);
// console.log(userOne);
// console.log(userOne.isLoggedIn);

// const userTwo = User("chai aur code", 12, false); // now if we use the function without creating new instance then it will overwrite the existing one.
const userTwo = new User("chai aur code", 12, false);

// console.log(userTwo);

//!   WHAT HAPPENS WHEN WE USE NEW KEYWORD

// 1)---> An empty object is formed which  is called as an instance.
// 2)---> An constructor function is called by new keyword. And the arguments which are passed to fuctions are packed by packed by new keyword
// 3)--->Arguments are injected into this keyword
// 4)---> you receive the arguments
