//16. Given a number of 10 digits (0000000000) convert it “+1 (000) 000-0000” format 

var num = 1234567890;
var arr = Array.from(num.toString().split(""));    //converting the number to string then to array

const convert = (num) =>{
  console.log("+1 ("+ arr[0]+arr[1]+arr[2] +") " + arr[3]+arr[4]+arr[5] +  "-" + arr[6]+arr[7]+arr[8]+arr[9])
}

const check = (num) => {  //checking various number types
  ((isNaN(num)) || (num == Infinity) || (num == -Infinity)) ? 
      console.log("Please enter number other than NaN, +Infinity, -Infinity") :
      (num >=10000000000 || num <= 999999999 ? console.log("Please enter excatly 10 digits and Make sure that the starting digit is not 0") : convert(num));    
}

//checking various inputs
const  init = () => {
  !(typeof num == 'number') ? console.log("Expected Number as input, Got something else") : check(num);
}
init();

  //conclusion: 
  // Checked with 1234567890, 0123456789, 123456789, "123456890",  [123456890], true/false,  {"a": 1, "b": 2, "c":3, "b": 4, "a": 5,"c": 6}, null, undefined, "", NaN, Infinity, -Infinity 
  
  //Input: 1234567890     => Output: +1 (123) 456-7890
  //Input: 0123456789     => Output: Please enter excatly 10 digits and Make sure that the starting digit is not 0
  //Input: 01234568923    => Output: Please enter excatly 10 digits and Make sure that the starting digit is not 0
  //Input: NaN or Infinity or -Infinity       => Output: Please enter number other than NaN, Infinity, -Infinity
  //Input: other than number   => Output: Expected Number, Got something else
  