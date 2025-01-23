// ARRAYS

//In js arrays are resizeable and can contain mix of different datatypes.
//JS array copy operations creates shallow copies(copy of object whose properties share the same refrence point) rather than deep copies (different refrence point(stack)).

const myArr = [0, 1, 2, 3, 4, 5];
const myHeros = ["ironman", "thor"];
const myArr2 = new Array(1, 2, 3, 4);
console.log(myArr[2]);

//Array Methods

// myArr.push(6);
// myArr.push(7);
// myArr.pop();

// myArr.unshift(9); //adds value at start but time consuming and not optimized
// myArr.shift();//removes the value

console.log(myArr.includes(9));
console.log(myArr.indexOf(3));

const newArr = myArr.join(); //converts array into string
console.log(typeof newArr);

//SLICE,SPLICE

console.log("A", myArr);

const myn1 = myArr.slice(1, 3);

console.log(myn1);
console.log("B", myArr);

const myn2 = myArr.splice(1, 3);
console.log("C", myArr);
console.log(myn2);

//Interview Question :
//Whats the difference b/w slice and splice
// 1) Slice doesn't mutate or manipulate the orginal array but splice does.
// 2)In slice last index in not included but in splice last index is included.
