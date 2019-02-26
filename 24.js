//24. Is the given number symmetrical ?

var num = 12321;
if(num == "" || !(typeof num == 'number')){
   console.log("Expected Number, Got something else.");
} else { 
  var temp = num, str = "";
  str = num.toString().split("").reverse().join().replace(/,/g, "");
  //changing the number to String, then to array, then reverse then back to String and replacing , with ""
  console.log((temp == Number(str)) ? "Symmetrical" : "Not Symmetrical")
}

    
//conclusion: 
// Checked with 12321, 1234, "12321", true/false,  {"a": 12321} 
  
//Input: 12321     => Output: Symmetrical
//Input: 1234      => Output: Not Symmetrical
//Input: other than Number   => Output: Expected Number, Got something else.
  