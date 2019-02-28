//14. Given an array of numbers, add every item and return sum 

var arr = [2,5,3,5,2,3,1,4]

const addEach = (arr) => {
  console.log("Sum of Array Elements: " + arr.reduce((s, item) => s + item));
  //using reduce to go through each element and adding items in every pass to s, i.e s+=item
}

const  init = () => {
  !(arr instanceof Array) ? console.log("Expected array, Got something else") : addEach(arr);
  //checking the input value
}
init();

  //conclusion: 
  // Checked with [2,5,3,5,2,3,1,4], "2,5,3,5,2,3,1,4", true/false,  {"a": 5, "b": 6, "c": 8, "b": 6, "a": 5,"c": 8},
  //              null, undefined, "", NaN, Infinity, -Infinity
  
  //Input: [2,5,3,5,2,3,1,4]       => Output: Sum of Array Elements: 25 
  //Input: other than array        => Output: Expected array, Got something else
  