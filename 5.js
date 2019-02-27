// 5. Find missing value in an array of numbers 
// Ex: [7, 2, 3, 6, 5, 10, 1, 4, 8] 
var arr = [1,2,3,5], len=arr.length ;
const missing = (arr) => {
    arr.sort((a,b) => (a-b));
    for(let i=0; i<len; i++){
        if(arr[i+1] - arr[i] == 2){
            console.log("Missing number is " + (arr[i]+1))
        } 
    }
}

const  init = () => {
  ((arr == "") || !(arr instanceof Array)) ? console.log("Expected array, Got something else") : missing(arr);
  //checking the input value
}
init();
        
  //conclusion: 
  // Checked with [1,2,3,5], 1235, "1,2,3,5", true/false,  {"a": 5, "b": 6, "c": 8} 
  
  //Input: [1,2,3,5]               => Output: Missing number is 4
  //Input: other than array        => Output: Expected array, Got something else
  