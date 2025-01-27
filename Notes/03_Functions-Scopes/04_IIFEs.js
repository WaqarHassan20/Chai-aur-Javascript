//Immediately Invoked Function Expressions (IIFE)

//What is an IIFE?
//A function which is executed immediately called IIFE and it  is used to prevent from the pollution caused by global scope variables  that is why we use IIFE.

//?How to write two IIFE together and pass parameters
(function chai() {
    //named IIFE
    console.log("DB connected");
  })(); //If we write two or more IIFEs together then semicolon is must
  
  ((name) => {
    console.log(`DB connected two , ${name}`);
  })("Unknown Person");
  