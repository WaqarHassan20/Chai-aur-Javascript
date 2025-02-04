function multilpleBy5(num) {
  return num * 5;
}

multilpleBy5.power = 2; // as we can use dot operator then we can say that functions in js are also objects.

console.log(multilpleBy5(5));
console.log(multilpleBy5.power);
console.log(multilpleBy5.prototype); //by default context of anything is set by javascipt and here {} is the default context of that method also called as this.

// Prototype is not just a method it also gives some internal properties.
function createUser(username, score) {
  this.username = username;
  this.score = score;
}

createUser.prototype.increment = function () {
  //   score++; // it doesn't know which element call him either the score of chai he has to increase or tea.
  //   //For that purpose we will provide him context.
  this.score++;
};

createUser.prototype.printMe = function () {
  // console.log(`Score is  ${score}`);//Kis ks score increase karna hai no idea?
  console.log(`Price is  ${this.score}`); //jis ne score pocha hai usks barha do
};

// const chai = createUser("chai", 25); // Now our code is not working bcz we haven't told the prototype that we have that additional properties.
// const tea = createUser("tea", 250);

//And telling the prototype that we have added aditional properties are done by new keyword.

const chai = new createUser("chai", 25);
const tea = new createUser("tea", 250);

chai.increment(); //26
chai.printMe(); //price is 26.

/*
  
  Here's what happens behind the scenes when the new keyword is used:
  
  A new object is created: The new keyword initiates the creation of a new JavaScript object.
  
  A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.
  
  The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.
  
  The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.
  
  */
