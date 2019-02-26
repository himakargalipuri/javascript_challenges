//Return factorial of a number
//Expected input type : number (5, 10, 2, ...)

var input = 5;
//Tried with different inputs like "akhil",{"Akhil" : 123},["akhi",123],...
const fact = (input) => {
  
  var fct = 1;
//Checking here whether the number is between 0 to 100.
  if (input > 0 && input < 100) {
    //Running the loop to find the factorial
    for (var i = 1; i <= input; ++i)
      fct = fct * i;
    return fct;
  }
  else {
    //throwing the error given number is not in range 0 - 100!
    throw new Error("Number Provided is not in range 0 - 100!");
  }
}

const factorial = (input) => {
return (typeof input == 'number' ) ? fact(input) : "Failed to Execute because of Wrongly Entered Input";   
};

var res = factorial(input);
  console.log(" Factorial of " + input + " is " + res);


//Expected output for given input is Factorial of 5 is 120.

//Expected Output for the given input "akhil" is  Failed to Execute because of Wrongly Entered Input.

//Expected Output for the given input {"Akhil" : 123} is Failed to Execute because of Wrongly Entered Input.

//Expected Output for the given input ["akhi",123]  is Failed to Execute because of Wrongly Entered Input.