//7. Eliminate odd numbers in an array 
var arr = [2,5,3,1,4]

//checking valid input
if(!(arr instanceof Array) || arr == ""){
  console.log("Expected Array, Got something else");
} else {
  console.log("After removing Odd Numbers: " + arr.filter((x) => (x%2==0)).sort((a,b) => (a-b)));
  //using filter to go through each element and applying conditions
}
        
  //conclusion: 
  // Checked with [2,5,3,1,4], "2,5,3,1,4", true/false,  {"a": 5, "b": 6, "c": 8} 
  
  //Input: [1,2,3,5]               => Output: After removing Odd Numbers: 2,4
  //Input: other than array        => Outpt: Expected Number, Got something else
  