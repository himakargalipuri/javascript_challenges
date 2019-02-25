//9. Remove duplicates from array 
var arr = [2,5,3,5,2,3,1,4]

//checking valid input
if(!(arr instanceof Array) || arr == ""){
  console.log("Expected Array, Got something else");
} else {
  console.log("After removing Duplicate Numbers: " + arr.filter((item, index) => (arr.indexOf(item)>=index)).sort());
  //using filter to go through each element and applying conditions
}
        
  //conclusion: 
  // Checked with [2,5,3,5,2,3,1,4], "2,5,3,5,2,3,1,4", true/false,  {"a": 5, "b": 6, "c": 8, "b": 6, "c": 8} 
  
  //Input: [2,5,3,5,2,3,1,4]       => Output: After removing Odd Numbers: 1,2,3,4,5
  //Input: other than array        => Outpt: Expected Number, Got something else
  