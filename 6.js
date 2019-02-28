// 6. Given an array of mixed even and odd numbers. Sort only even numbers. 
// Ignore odd numbers and their positions
// [8, 2, 3, 6, 5, 9, 1, 4, 7] 
// [2, 4, 3, 6, 5, 9, 1, 8, 7] 

var arr = [8, 2, 3, 6, 5, 9, 1, 4, 7];

const evenSort = (a) => {
    var  b=[], j=0, k=0;
    a.filter((x) => {return (x%2==0) ? b[j++] = x : ""})    //finding even number in a[] and storing in b[]
    b.sort();
    return a.map((x)=> {return (x%2==0) ? x = b[k++] : x})  //finding even number in a[] and replacing it with b[]
}

const check = (arr) => {
    for(let i in arr){      //checking if array of numbers or not
    return (!(typeof arr[i] == 'number') || (isNaN(arr[i])) || (arr[i] == Infinity) || (arr[i] == -Infinity)) ? 
      "Please enter array numbers other than NaN, +Infinity, -Infinity" : 
      evenSort(arr);
  }
}
      
const  init = () => {
  (!(arr instanceof Array)) ? console.log("Expected array, Got something else") : console.log(check(arr));
  //checking the input value
}
init();

     
//Conclusion: 
// Checked with [8, 2, 3, 6, 5, 9, 1, 4, 7], 864325, "864325", [8, "2", 3, 6, 5, NaN, 1, 4, 7], true/false,  {"a": "8", "b": "5", "c": "6"}, null, undefined, "", Infinity, -Infinity, NaN 
  
//Input: [8, 2, 3, 6, 5, 9, 1, 4, 7]       => Output: [2, 4, 3, 6, 5, 9, 1, 8, 7]
//Input: [8, "2", 3, 6, 5, NaN, 1, 4, 7]   => Output: Please enter array numbers other than NaN, +Infinity, -Infinity
//Input: Other than Array                  => Output: Expected Array, Got something else
  