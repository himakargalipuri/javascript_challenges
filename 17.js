//17. Validate if given input is array
var arr = [1,2,3] 
const isItArray = (x) => {
    return (x instanceof Array) ? "It is an Array" : "Not an array"
}
console.log(isItArray(arr));

//conclusion: 
  // Checked with arr = [1,2,3], "1,2,3", true/false, {1: "a", 2: "3", 4: "r"}, null, undefined, "", NaN, Infinity, -Infinity 
  
  //Input: [1,2,3]            => Output: It is an Array
  //Input: other than array   => Output: Not an array
  