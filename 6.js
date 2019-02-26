// 6. Given an array of mixed even and odd numbers. Sort only even numbers. 
// Ignore odd numbers and their positions
// [8, 2, 3, 6, 5, 9, 1, 4, 7] 
// [2, 4, 3, 6, 5, 9, 1, 8, 7] 

var arr = [8, 2, 3, 6, 5, 9, 1, 4, 7];
const  init = () => {
    ((arr == "") || !(arr instanceof Array)) ? console.log("Expected Array, Got something else") : console.log(evenSort(arr));
    //checking the input value
}
//driver code
const evenSort = (a) => {
    var  b=[], j=0, k=0;
    a.filter((x) => {return (x%2==0) ? b[j++] = x : ""})    //finding even number in a[] and storing in b[]
    b.sort();
    return a.map((x)=> {return (x%2==0) ? x = b[k++] : x})  //finding even number in a[] and replacing it with b[]
}
init();

     
//Conclusion: 
// Checked with [8, 2, 3, 6, 5, 9, 1, 4, 7], 864325, "864325", true/false,  {"a": "8", "b": "5", "c": "6"} 
  
//Input: [8, 2, 3, 6, 5, 9, 1, 4, 7]   => Output: [2, 4, 3, 6, 5, 9, 1, 8, 7]
//Input: Other than Array              => Output: Expected Array, Got something else
  