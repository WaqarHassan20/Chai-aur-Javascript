//Reduce mathod in Arrays

const myNums = [1, 3, 5];

// const myTotal = myNums.reduce(function (acc, currVal) {
//     console.log(`acc:${acc} , currVal:${currVal}`);
//     return acc + currVal;
// }, 0);
// console.log(myTotal);

const yourTotal = myNums.reduce((acc, currVal) => acc + currVal, 0);
console.log(yourTotal);

const shoppingCart = [
  {
    itemname: "js",
    price: 999,
  },
  {
    itemname: "python",
    price: 1999,
  },
  {
    itemname: "Data Scientist",
    price: 3999,
  },
  {
    itemname: "Mobile Development",
    price: 4999,
  },
];

const totalPrice = shoppingCart.reduce((acc, item) => acc + item.price, 0);//accesing price in object
console.log(totalPrice);
