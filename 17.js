
//17. Validate if given input is array (think twice before you attempt - hard) 

var arr = [1,2,3] 
console.log(((x) => {
    return (x instanceof Array) ? "It is Array" : "Not an array"})(arr));

//conclusion: 
  // Checked with [1,2,3], "1,2,3", true/false, {1: "a", 2: "3", 4: "r"} 
  
  //Input: [1,2,3]                         => Output: It is Array
  //Input: other than array i.e, [1,2,3]   => Output: Not an array
  