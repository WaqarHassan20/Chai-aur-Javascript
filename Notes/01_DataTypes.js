// JAVASCRIPT FOUNDER : BRENDAN EICH
// NODE AND DENO FOUNDER : RYAN DAHL

/*

numbers = 2 to power of 55
bigint : also a datatype
string => ""
boolean => true/false
null => type is object , number form is 0 , standalone value
undefined => type is undefined
symbol => unique

typeof null => object
typeof undefined => undefined
1=> true and 0=> false
"" => false
"abc" => true

*/
let score = 33;
console.log(typeof score);
let stringedValue = String(score);
console.log(stringedValue);
console.log(typeof stringedValue);

const accountId = 12345;
let accountEmail = "WAQAR@GMAI@.COM";
var accountPassword = "Jaipur";
let accountCity;
console.table([accountEmail, accountId, accountPassword, accountCity]);

// Primitive typed values : string, number , boolean , bigint ,null , undefined , symbol   ===== created in stack
// Refrence  typed values : array , objects , functions   ==== also called non primitive values  ===== created in heap

const array = ["Waqar ", "ali", "ahmad"];
const myObject = {
  name: "waqar",
  age: "I am 23",
  job: "jobless",
};
console.table(array); // table prints the data in form of table in console
console.table(myObject);
// typeof undefined => undefined
// typeof null => object
// rest of all are functions

// ================================= //
// ========= OPERATIONS IN JS ====== //
// ================================= //

let str1 = "Waqar Ul";
let str2 = " Hassan";
let str = str1 + str2;
console.log(str);
(power) => console.log(2 ** 6);

console.log("1" + 2);
console.log(1 + "2");
console.log("1" + 2 + 2);
console.log(1 + 2 + "2");
