//PROMISES IN JAVASCRIPT

//The promise object represents the eventual completion (or faliure) of an asyncronous operation and its resulting value.

//A promise has three states:-

//Pending: initial state, neither fullfilled nor rejected
//fullfilled: meaning that the operation was completed sucessfully.
//rejected: meaning that the operation failed

const promiseOne = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 1");
    resolve(); //informs that the task is done and promise is completed.
    //if resolve is not used then the '.then' callBack function will not be executed.
  }, 1000);
});
promiseOne.then(() => {
  console.log("Promise consumed");
});

new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("Async task 2");
    resolve();
  }, 1000);
}).then(() => {
  console.log("Async 2 resolved");
});

//passing parameters to then through resolve()

const promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({
      username: "chai",
      email: "chai@example.com",
    });
  }, 1000);
});
//Whatever data we pass to resolve() is automatically received into "then" call back function
promiseThree.then((user) => {
  console.log(user);
});

//Using reject()
const promiseFour = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ username: "hitesh", password: "123" });
    } else {
      reject("ERROR: something went wrong");
    }
  }, 1000);
});

promiseFour
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((username) => {
    console.log(username);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("The promise is either resolved or rejected ");
  });

// console.log(username);//promise rejection

const promiseFive = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve({ usernam: "javascript", password: "123" });
    } else {
      reject("Error: js went wrong");
    }
  }, 1000);
});

async function consumePromiseFive() {
  //   const respone = await promiseFive; //promise is an object so it can't consumed by promiseFive().
  //   console.log(respone); //this thing doesn't print anything because we throwig an error in an async function without using try/catch block.
  try {
    const respone = await promiseFive;
    console.log(respone);
  } catch (error) {
    console.log(error);
  }
}
consumePromiseFive();

//aysnc await

// async function getAllUsers() {
//   try {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("E:", error);
//   }
// }

// getAllUsers();

//samething but different approach
fetch("https://api.github.com/users/hiteshchoudary")
  .then((response) => {
    return response.json();
  })
  .then((data) => console.log(data))
  .catch((error) => console.log(error));

//A fetch promise only rejects when a network error is encountered(which is usually when there's a permissions issue or similar ).A fetch() promise doesn't rejects on HTTP errors (404,etc).Instead a then() handler must check the response.ok and or response.status properties...
//So, error code 404 or other doesn't go to catch() method they will go to try method becz it is not an error.
