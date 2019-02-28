// 5. Find missing value in an array of numbers 
// Ex: [7, 2, 3, 6, 5, 10, 1, 4, 8] 
var arr = [1,2,3,5] 
const missing = (arr) => {
    len=arr.length ;
    arr.sort((a,b) => (a-b));
    for(let i=0; i<len; i++){
        if(arr[i+1] - arr[i] == 2){
            return ("Missing number is " + (arr[i]+1))
        } 
    }
}
const check = (arr) => {
    for(let i in arr){  //checking if array of numbers or not
    return !(typeof arr[i] == 'number' || isNaN(arr[i]) || arr[i] == Infinity) || (arr[i] == -Infinity) ? 
      "Please enter array numbers other than NaN, +Infinity, -Infinity" : 
      missing(arr);
  }
}
      
const  init = () => {
  !(arr instanceof Array) ? console.log("Expected array, Got something else") : console.log(check(arr));
  //checking the input value
}
init();
        
  //conclusion: 
  // Checked with [1,2,3,5], [NaN,2,"3",5], 1235, "1,2,3,5", true/false,  {"a": 5, "b": 6, "c": 8}, null, undefined, "", Infinity, -Infinity, NaN
  
  //Input: [1,2,3,5]               => Output: Missing number is 4
  //Input: [NaN,2,"3",5]           => Output: Please enter array numbers other than NaN, +Infinity, -Infinity
  //Input: other than array        => Output: Expected array, Got something else
  