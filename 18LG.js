//Find sum of numbers between 1 to n. Dont use loop. Basic maths
//Expected input type : number.
  
var n = 10;
//Tried with different inputs like  "Akhil",{"Akhil" : 123},["akhi",123],true...

//This function is to calculate the sum...
const sum = (n) => {
  var sum = 0;
  sum = n*((n+1)/2);
  return sum;
}

const sumN = (n) => {
  return ( (typeof n == 'number') ? sum(n) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = sumN(n) ;
//Printing the result here
console.log("Sum of the number from 1 to " + n + " is " + res)

//Expected output when the Given number 10 is Sum of the number from 1 to 10 is 55

//Expected output when the Given input is "Akhil" Sum of the number from 1 to Akhil is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Sum of the number from 1 to [object Object] is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Sum of the number from 1 to akhi,123 is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Sum of the number from 1 to true is Failed to Execute because of Wrongly Entered Input