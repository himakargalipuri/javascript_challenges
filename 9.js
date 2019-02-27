//9. Remove duplicates from array 
var arr = [2,5,3,5,2,3,1,4, "ani", "ani"]

const removeDup = (arr) => {
  console.log("After removing Duplicates: " + arr.filter((item, index) => (arr.indexOf(item)>=index)).sort());
  //using filter to go through each element and applying conditions
}

const  init = () => {
  ((arr == "") || !(arr instanceof Array)) ? console.log("Expected array, Got something else") : removeDup(arr);
  //checking the input value
}
init();

  //conclusion: 
  // Checked with [2,5,3,5,2,3,1,4,"ani","ani"], "2,5,3,5,2,3,1,4", true/false,  {"a": 5, "b": 6, "c": 8, "b": 6, "c": 8} 
  
  //Input: [2,5,3,5,2,3,1,4,"ani","ani"]     => Output: After removing Duplicates: 1,2,3,4,5,ani
  //Input: other than array                  => Output: Expected array, Got something else
  