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
if(num == ""){
  throw new Error("Number not provided");
} else if(num < 0 || num >100) {
  console.log("Enter between 0 and 100");
} else if(!(typeof num == 'number')) {
  console.log("Expected Number, Got something else");
} else { 
  console.log(findFactorial(num));
}

        
//conclusion: 
// Checked with 5, "5", [5], true/false, ((x)=> x)(5);, {"a": 5} 

//Input: 5 or ((x)=> x)(5) IIFE;            => Output: 120
//Input: other than number                  => Outpt: Expected Number, Got something else
//Input: Less than 0 and greater than 100   => Output: Enter between 0 and 100
