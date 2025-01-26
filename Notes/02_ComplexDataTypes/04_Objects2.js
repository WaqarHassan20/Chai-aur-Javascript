//! Declaring objects with construtor or sigleton objects

// const tinderUser = new Object(); //singleton object
const tinderUser = {}; //non singlton object
tinderUser.id = "123abs";
tinderUser.name = "Waqar";
tinderUser.isLoggedIn = false;

console.log(tinderUser);

const regularUser = {
  email: "someone@gamail.com",
  fullName: {
    userFullName: {
      firstName: "Waqar UL",
      lastName: "Hassan",
    },
  },
};

console.log(regularUser.fullName.userFullName.firstName);

const obj1 = { 1: "A", 2: "b" };
const obj2 = { 3: "c", 4: "d" };
const obj3 = { 5: "e", 6: "f" };

// const obj3 = { obj1, obj2 };

//concatination of objects in a single object.
const obj4 = Object.assign({}, obj1, obj2, obj3);
console.log(obj4);

//!Spread operator

const obj5 = { ...obj1, ...obj2 };
console.log(obj5);

const users = [
  {
    id: 1,
    email: "guiaal@gamil.com",
  },
  {
    id: 1,
    email: "guiaal@gamil.com",
  },
  {
    id: 1,
    email: "guiaal@gamil.com",
  },
  {
    id: 1,
    email: "guiaal@gamil.com",
  },
];

users[1].email;
console.log(tinderUser);

console.log(Object.keys(tinderUser)); //Vimp
const newArr = Object.keys(tinderUser).map((key) => ({ key, value: tinderUser[key] })); //Creates an array of objects
console.log(newArr)
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//!Destructuring of objects and JSON API into
const course = {
  courseName: "js in hindi",
  price: "999",
  courseInstructor: "hitesh",
};

//course.courseInstructor

const { courseInstructor: instructor, price } = course;

// console.log(courseInstructor)
console.log(instructor);
console.log(price);
