//14. Given an array of numbers, add every item and return sum 
var arr = [2,5,3,5,2,3,1,4]

//checking valid input
if(!(arr instanceof Array) || arr == "") {  //checking if array or not
  console.log("Expected Array, Got something else");
} else {
  console.log("Sum of Array Elements: " + arr.reduce((s, item) => s + item));
  //using reduce to go through each element and adding items in every pass to s, i.e s+=item
}
        
  //conclusion: 
  // Checked with [2,5,3,5,2,3,1,4], "2,5,3,5,2,3,1,4", true/false,  {"a": 5, "b": 6, "c": 8, "b": 6, "a": 5,"c": 8} 
  
  //Input: [2,5,3,5,2,3,1,4]       => Output: Sum of Array Elements: 25 
  //Input: other than array        => Outpt: Expected Number, Got something else
  