const marvel_heros = ["thor", "ironman", "spiderman"];
const dc_heros = ["superman", "flash", "batman"];
const languages = ["java", "python", "C-sharp"];

// marvel_heros.push(dc); //pushes on a existing array
// console.log(marvel_heros); //this causes an array inside an array
// console.log(marvel_heros[3][1]);

// const newArr = marvel_heros.concat(dc_heros); //returns a new array
// console.log(newArr);

// SPREAD OPERATOR
//Aik kanch ka glass tu tor diya tu wo spread hogya
//concat() is only used to concat two array but with spread operator we can concat as much arrays we want.
//Spread(...) operator is Prefered more than concat().

const allNewHeros = [...marvel_heros, ...dc_heros, ...languages];
console.log(allNewHeros);

const anotherArray = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]];

const realAnotherArray = anotherArray.flat(Infinity); //used to convert multiple arrays in a single array.
//flat(depth)--->depth-->in depth how to much arrays we want to convert in an array.
//Infinity means all of the arrays present in an array.
console.log(realAnotherArray);

//The Array.from() static method creates a new, shallow-copied Array instance from an iterable or array-like object
//Only itrateables
console.log(Array.isArray("Ali"));
console.log(Array.from("ali"));
//-----------Interview question
console.log(Array.from({ name: "Ali" })); //empty array
//array.from() doesn't sure that it have to make array of key or value
// console.log(Array.from(score1, score2, score3))    //Not possible because it isn't iterateable.

let score1 = 100;
let score2 = 200;
let score3 = 300;

//convert set of elements into an array
console.log(Array.of(score1, score2, score3));
