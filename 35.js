//35. Convert celsius data to fahrenheit 

var num = 120;
const toFar = (n) => {
  return n + "° Celsius In Fahrenheit: " + (((n * (9/5)) + 32)) + " °F";  //Mathematical Formula
}

const check = (num) => {
  ((isNaN(num)) || (num == Infinity) || (num == -Infinity)) ? console.log("Please enter number other than NaN, +Infinity, -Infinity") : console.log(toFar(num));
}
  
//checking various inputs
const  init = () => {
  !(typeof num == 'number') ? console.log("Expected Number as input, Got something else") : check(num);
}
init();
     
//Conclusion: 
// Checked with -10, "120", [1234], true/false,  {"a": "125", "b": "36", "c": "28"}, null, undefined, "", NaN, Infinity, -Infinity 
  
//Input: -10      => Output: -10° Celsius In Fahrenheit: 14 °F
//Input: 120      => Output: 120° Celsius In Fahrenheit: 248 °F
//Input: NaN or Infinity or -Infinity   => Output: Please enter number other than NaN, +Infinity, -Infinity
//Input: other than Number   => Output: Expected Number, Got something else
  