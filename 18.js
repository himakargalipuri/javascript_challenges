//18. Find sum of numbers between 1 to n. Dont use loop.

var num = 5;

//checking valid input
const sumOfNumbers = (n) => {
  return !(n<0) ? `Sum = ${n * (n+1)/2}` : `Sum = -${(-n * (-n+1)/2) - 1}`
}

const check = (num) => {  //checking various number types
  (isNaN(num) || (num == Infinity) || (num == -Infinity)) ? console.log("Please enter number other than NaN, +Infinity, -Infinity") : console.log(sumOfNumbers(num));
}
//checking various inputs
const  init = () => {
  !(typeof num == 'number') ? console.log("Expected Number as input, Got something else") : check(num);
}
init();
  //conclusion: 
  // Checked with 5, -5, "5", [5], true/false,  {5: 5}, null, undefined, "", NaN, Infinity, -Infinity  
  
  //Input: 5     => Output: Sum = 15
  //Input: -5    => Output: Sum = -14
  //Input: NaN or Infinity or -Infinity       => Output: Please enter number other than NaN, Infinity, -Infinity
  //Input: other than number   => Outupt: Expected Number as input, Got something else
  