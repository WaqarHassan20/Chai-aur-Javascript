//!Functions and Parameters

function sayMyName() {
  console.log("Waqar Hassan");
}

sayMyName; //refrence of functions;
sayMyName(); //Execution of function


function addTwoNum(num1, num2) {
  return num1 + num2; //return always at the end of function.
  console.log(num1 + num2); //unreachable code ----Will not be executed
}

const result = addTwoNum(7, 9);
console.log(result); //undefined

function loggedIn(userName) {
  //if we want that the if block never become true then we will use this
  //todo:syntax ----->funtion loggedIn(userName='sam');
  if (!userName) {
    //userName===undefined is equal to <---(!username)---->
    console.log("Plz enter a userName");
    return;
  }
  return `${userName} , just logged in.`;
}

const user = loggedIn("Waqar");
console.log(user);

// console.log(loggedIn()); //Undefined not Null bcz userName is not defined yet.

//!REST OPERATOR(...NUM)

//* (...)--->Rest operator coverts arguments into array
//REST operator means we have some things in spreaded form , give us these these things in the form of a package.

function calculateCartPrice(val1, val2, ...num1) {
  return num1;
}

console.log(calculateCartPrice(300, 22, 889, 88)); //[889,88]

//! OBJECTS THROUGH FUNCTIONS

const detail = {
  userName: "Waqar",
  price: 100,
};
function handleObject(anyobject) {
  console.log(
    `UserName is ${anyobject.userName} and price is ${anyobject.price}`
  );
}

console.log(handleObject(detail));

//! ARRAYS THROUGH FUNCTIONS

const myNewArray = [200, 400, 600, 800];

function returnSecondValue(getArray) {
  return getArray[1];
}

console.log(returnSecondValue(myNewArray));
