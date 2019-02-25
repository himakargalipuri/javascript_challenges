//Return factorial of a number
//Expected input type : number (5, 10, 2, ...)

var input = 5;

const factorial = (input) => {
return (typeof input == 'number' ) ? fact(input) : "Failed to Execute because of Wrongly Entered Input";
    
};
var res = factorial(input);

function fact(input) {
  
  var fct = 1;
//Checking here whether the number is between 0 to 100.
  if (input > 0 && input < 100) {
    //Running the loop to find the factorial
    for (var i = 1; i <= input; ++i)
      fct = fct * i;

    console.log(" Factorial of " + input + " is " + fct);
  }
  else {
    //throwing the error given number is not in range 0 - 100!
    throw new Error("Number Provided is not in range 0 - 100!");
  }
}
//Expected output for given input is Factorial of 5 is 120.