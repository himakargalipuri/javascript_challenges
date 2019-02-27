//7. Eliminate odd numbers in an array 
var arr = [2,5,3,1,4]

const removeOdd = (arr) =>{
  console.log("After removing Odd Numbers: " + arr.filter((x) => (x%2==0)).sort((a,b) => (a-b)));
  //using filter to go through each element and applying conditions
}

//checking valid input
const  init = () => {
  ((arr == "") || !(arr instanceof Array)) ? console.log("Expected array, Got something else") : removeOdd(arr);
  //checking the input value
}
init();

  //conclusion: 
  // Checked with [2,5,3,1,4], 25314, "2,5,3,1,4", true/false,  {"a": 5, "b": 6, "c": 8} 
  
  //Input: [2,5,3,1,4]             => Output: After removing Odd Numbers: 2,4
  //Input: other than array        => Outpt: Expected array, Got something else
  