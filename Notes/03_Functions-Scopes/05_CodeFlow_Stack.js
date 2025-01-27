//! CODE EXECUTION IN JS AND CALL STACK

//? JS EXECUTION CONTEXT -->
// How the code is executed in js is called code execution context.
//There are two phases..

// 1)--> GLOBAL EXECUTION CONTEXT
// 2)--> FUNCTIONAL EXECUTION CONTEXT
// 3)--> EVAL EXECUTION CONTEXT (USUALLY USED IN MOONGOOSE BUT CONTEXT ARE ONLY TWO IN JS).

//*Global Execution Context ---> When the execution context is global then it is refered to 'THIS' variable.

//todo: IN interview it is asked that when code is executed in browser enviroment then what is the global context ? Ans_------> "WINDOW" object.

//Js is a single thread language in js everything is dealt as a process.

//! Example ---->

let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
  let total = num1 + num2;
  return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

// Lets say we have a javascript code it will run into two phases:

//*  (1)-- > Memory creation phase
//?  (2)---> Execution phase.

//! Step 1)--->
// is that the code will executed into  global execution context and code is allocated into 'THIS'.

//! Step 2)---->
// All the variables are will be kept in memory creation phase....In memory creation phase all variables are assigned "UNDEFINED".And it is also called as first cycle and it will be done no matter what.
/*
val1 = undefined;
val2 = undefined;
addNum = function definition
result1 = undefined;
result2 = undefined;
*/

//! Step 3)--->
//In execution phase the original values are assigned to variables and if something has to executed then it will be executed.
// val1=10
// val2=5
// Now when we have to assign value to resul1 then we see that we have to perform some execution and then addNum() will create its own execution context then a new variable enviroment and execution thread will be formed in that execution context.
//* Then both memory phase and execution context will be done for addNum() bcz global is defined once it willn't be assigned again and again , now whenever a funtion comes then  a new sandbox will be formed in which MP and EP will be done.

//? Step 3)-->Step i)-->
//In memory phase of new execution context formed for function addNum()
//val1=undefined;
//val2=undefined;
//total=undefined;

//?  Step 3)--->Step ii)--->
//In execution context of addNum() value of vals will be assigned to local variables nums
// num1 = 10;
// num2 = 5;
// total = 15;
//*Value of total will be returned to parent/ global execution context.
//todo: Then when execution of addNum() is finished then it is automatically deleted.

//! then result1 = 15 ;

//* Same process will be done for result2;

//! +++++++++++++++++++++++++++ CALL STACK ++++++++++++++++++++++++

//*WORKS ON  LIFO RULE

//SAME AS STACK IN ASSEMBLY BUT IN THIS WE USED THREE DIFFRERENT FUNCTIONS , ONE() TWO() THREE()

// in one two is called and in two three is called .
// in stack first one is load then two and then three but when their execution is finished then they will come out of stack in such a way ---> three two one .
