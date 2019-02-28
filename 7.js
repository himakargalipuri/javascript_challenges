//7. Eliminate odd numbers in an array 
var arr = [2,5,3,1,4]

const removeOdd = (arr) =>{
  return "After removing Odd Numbers: " + arr.filter((x) => x%2==0).sort((a,b) => (a-b));
  //using filter to go through each element and applying condition
}

const check = (arr) => {
  for(let i in arr){      //checking if array of numbers or not
    return (!(typeof arr[i] == 'number')||(isNaN(arr[i])) || (arr[i] == Infinity) || (arr[i] == -Infinity)) ? 
      "Please enter array numbers other than NaN, +Infinity, -Infinity" : 
      removeOdd(arr);
  }
}
      
const  init = () => {
  (!(arr instanceof Array)) ? console.log("Expected array, Got something else") : console.log(check(arr));
  //checking the input value
}
init();

  //conclusion: 
  // Checked with [2,5,3,1,4], 25314, [10/"hi",2,"3",5], "2,5,3,1,4", true/false,  {"a": 5, "b": 6, "c": 8}, null, undefined, "", Infinity, -Infinity, NaN  
  
  //Input: [2,5,3,1,4]             => Output: After removing Odd Numbers: 2,4
  //Input: [10/"hi",2,"3",5]       => Output: Please enter array numbers other than NaN, +Infinity, -Infinity
  //Input: other than array        => Output: Expected array, Got something else
  