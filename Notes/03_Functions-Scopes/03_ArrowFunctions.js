//*THIS is always used in current context ---->THIS refers to current context

const user = {
  username: "aliabbas", //All of the things inside same scope is called 'they are in current/same context'
  price: 999,

  welcomeMessage: function () {
    console.log(`${this.username} , welcome to website`);
  },
};
// user.welcomeMessage();
// user.username = "sam";
// user.welcomeMessage();

// sam , welcome to website bcz in welcomeMessage() we use THIS  which says that whatever the value in object in same context i will use that ... If we didn't use "This" username is a hardcoded value and output willn't be like that.

console.log(this); //{}  bcz right now there nothing in current context in NODE environment .
//* But if we use same line no.18 statement in browser then it will give us window object bcz in browser the window object is in global context.

//THIS IN FUNCTIONS

function chai() {
  let username = "Waqar";
  console.log(this.username);
}
chai(); //undefined becz "This " doesn't work in funtions in good manner.

// const chai1 = function () {
//     let username = "Waqar";
//   console.log(this.username); //undefined
// }
// chai1()

//!------------Arrow function------------)

const chai2 = () => {
  let username = "ali";
  //   console.log(this);
  console.log(this.username); //undefined
};

// chai2(); //{}
chai2();

// const addTwo=(num1,num2) => {
//     return num1 + num2; //simple arrow function
// }

//***************Implicit return arrow function****************

const addTwo = (num1, num2) => num1 + num2;

console.log(addTwo(89, 99));
