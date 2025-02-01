//MAPS
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const newNums = myNums.map((num) => {
  return num + 10;
});
console.log(newNums);

//Map function using for each.

//for each loop return values but filter and map returns array
// const alphaNums = myNums.forEach((num) => {
//   console.log(num + 10);
// });

const basket = [];
myNums.forEach((num) => {
  num = num + 10;
  basket.push(num);
});

console.log(basket);

//Chaining

const etcNums = myNums
  .map((num) => num * 10)
  .map((num) => num + 1)
  .filter((num) => num > 80);
console.log(etcNums);
