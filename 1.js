//1. Return factorial of a number 
// ● Validate empty input, number 
// ● Send error number not provided 
// ● Accept only numbers less than 100 and greater than 0 

var num = 5; 
const findFactorial = ((x)=> {
    return (x==1) ? 1 : x * findFactorial(x-1)
    // recursive function which calls itself
});

//checking various inputs
const  init = () => {
  !(typeof num == 'number') ? (console.log("Expected Number as input, Got something else")) : checkRange(num);
}

const checkRange = (n)=> {    //checking various number types
  ((isNaN(n)) || (n == Infinity) || (n == -Infinity)) ? 
    console.log("Please enter number other than NaN, +Infinity, -Infinity") : 
    ((n > 100 || n < 0) ? console.log("Enter number between 0 and 100") : console.log(findFactorial(n)));
}
init();

//Conclusion: 
// Checked with 5, "5", [5], true/false, ((x)=> x)(5);, {"a": 5}, null, undefined, "", Infinity, -Infinity, NaN

//Input: 5 or ((x)=> x)(5); IIFE;           => Output: 120
//Input: NaN or Infinity or -Infinity       => Output: Please enter number other than NaN, Infinity, -Infinity
//Input: Less than 0 and greater than 100   => Output: Enter number between 0 and 100
//Input: other than Number                  => Output: Expected Number as input, Got something else
