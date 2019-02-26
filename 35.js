//35. Convert celsius data to fahrenheit 

var num = 120;
const  init = () => {
    ((num == "") || !(typeof num == 'number')) ? console.log("Expected Number, Got something else") : console.log(toFar(num));
    //checking the input value
}
//driver code
const toFar = (n) => {
    return n + "° Celsius In Fahrenheit: " + (((n * (9/5)) + 32)) + " °F";  //Mathematical Formula
}
init();

     
//Conclusion: 
// Checked with -10, "129", [1234], true/false,  {"a": "125", "b": "36", "c": "28"} 
  
//Input: -10      => Output: -10° Celsius In Fahrenheit:14 °F
//Input: 120      => Outpt: 120° Celsius In Fahrenheit: 248 °F
//Input: other than Number   => Output: Expected Number, Got something else
  