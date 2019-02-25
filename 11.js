//11. Given an array of strings/numbers... sort and eliminate duplicates 

var arr = [2,5,3,5,2,3,1,4, "a", "ak", "b", "an"]

//checking valid input
if(!(arr instanceof Array) || arr == ""){  //checking if array or not
  console.log("Expected Array, Got something else");
} else {
  console.log("After removal of Duplicate elements and Sorting: " + arr.filter((item, index) => (arr.indexOf(item)>=index)).sort());
  //using filter to go through each element and applying conditions
}
        
  //conclusion: 
  // Checked with [2,5,3,5,2,3,1,4,"a", "ak", "b", "an"], "2,5,3,5,2,3,1,4,"a", "ak", "b", "an"", true/false,  {"a": 5, "b": 6, "c": 8, "b": 6, "a": 5,"c": 8} 
  
  //Input: [2,5,3,5,2,3,1,4,"a", "ak", "b", "an"]       => Output: After removal of Duplicate elements and Sorting: 1,2,3,4,5,a,ak,an,b
  //Input: other than array        => Outpt: Expected Number, Got something else
  