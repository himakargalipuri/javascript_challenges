//12. Given an array of strings/numbers return each item of the array as object key and value as number of repetitions
// ["a","b","c","a","d","c","d","c"] = {‘a’:2, ‘b’:1, ‘c’:’3’, ‘d’:2} 

var arr = ["a","b","c","a","d","c","d","c"], myObj = {};

const genObj = ((arr) => {
  arr.sort();
  arr.map((x) => {
    myObj[x] ? myObj[x] = myObj[x] + 1 : myObj[x] = 1
    //checking if the array element present in myObj or not as key and assigning number of repetitions as value
  })
  console.log(myObj)
})

//checking valid input
const  init = () => {
 !(arr instanceof Array) ? console.log("Expected array, Got something else") : genObj(arr);
}
init();
        
  //conclusion: 
  // Checked with ["a","b","c","a","d","c","d","c"], 123452134, "abcadcdc", true/false,  
  //      {"a": 5, "b": 6, "c": 8, "a": 6, "d": 5,"c": 8}, null, undefined, "", NaN, Infinity, -Infinity
  
  //Input: ["a","b","c","a","d","c","d","c"]   => Output: { a: 2, b: 1, c: 3, d: 2 }
  //Input: other than array                    => Output: Expected array, Got something else
  