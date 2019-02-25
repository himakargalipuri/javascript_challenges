//12. Given an array of strings/numbers return each item of the array as object key 
// and value as number of repetitions 
// ["a","b","c","a","d","c","d","c"] = {‘a’:2, ‘b’:1, ‘c’:’3’, ‘d’:2} 

var arr = ["a","b","c","a","d","c","d","c"], myObj = {};

const myValidation = (() => {
  arr.sort();
  for (let i in arr) {myObj[arr[i]]  ?  myObj[arr[i]] = myObj[arr[i]] + 1  :  myObj[arr[i]] = 1;}
  return myObj 
})
//checking valid input
if(!(arr instanceof Array) || arr == ""){  //checking if array or not
  console.log("Expected Array, Got something else");
} else {
  console.log(myValidation());  //calling the function
}
        
  //conclusion: 
  // Checked with ["a","b","c","a","d","c","d","c"], "abcadcdc", true/false,  {"a": 5, "b": 6, "c": 8, "a": 6, "d": 5,"c": 8} 
  
  //Input: ["a","b","c","a","d","c","d","c"]   => Output: { a: 2, b: 1, c: 3, d: 2 }
  //Input: other than array                    => Outpt: Expected Number, Got something else
  