//24. Is the given number symmetrical ?

var num = 12321;
const isSymmetric = (num) => { 
  var temp = num, str = "";
  str = num.toString().split("").reverse().join().replace(/,/g, "");
  //changing the number to String, then to array, then reverse then back to String and replacing "," with ""
  console.log((temp == Number(str)) ? "Symmetrical" : "Not Symmetrical")
}

const check = (num) => {    //checking various inputs types
  ((isNaN(num)) || (num == Infinity) || (num == -Infinity)) ? console.log("Please enter number other than NaN, +Infinity, -Infinity") : isSymmetric(num);
}

//checking various inputs
const  init = () => {
  !(typeof num == 'number') ? console.log("Expected Number as input, Got something else") : check(num);
}
init();

//conclusion: 
// Checked with 12321, 1234, "12321", [121], true/false,  {"a": 12321}, null, undefined, "", NaN, Infinity, -Infinity 
  
//Input: 12321     => Output: Symmetrical
//Input: 1234      => Output: Not Symmetrical
//Input: NaN or Infinity or -Infinity   => Output: Please enter number other than NaN, +Infinity, -Infinity
//Input: other than Number   => Output: Expected Number as input, Got something else.
  