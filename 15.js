// 15. Create a function that takes both a string and an array of numbers as 
// arguments. Rearrange the letters in the string to be in the order specified by 
// the index numbers. Return the "remixed" string. 
// remix("abcd", [0, 3, 1, 2]) ➞ "acdb"

var str = "abcd", strArr="", arr=[], nArr = [];
var arr = [0,3,1,2]

const  init = () => {
  return (!(arr instanceof Array) || arr == "" || str == "" || !(typeof str =='string')) ? 
      ("Expected Array and String, Got something else") : (remix(strArr, arr));
  //checking if input is array and String or not
}

var remix = ((strArr, arr) => {
  strArr = str.split(""), i=0;
  arr.map((x) => {
    nArr[x] = strArr[i++] //storing the array strArr values in nArr array with indexes as arr [0,3,1,2]
  })
  return nArr.join("");
});

console.log(init());

  //conclusion: 
  // Checked with str = "abcd" and arr = [0, 3, 1, 2], str = 55555 and arr = [0, 3, 1, 2], str = "abcd" and arr = "0,3,1,2", 
  //      str = true/false and arr =  "0, 3, 1, 2",  str = {"a": 5, "b": 6, "c": 8, } and arr = [0,3,1,2]
  
  //Input: str = "abcd" and arr = [0, 3, 1, 2]    => Output: acdb
  //Input: other than string and array            => Output: Expected Array and String, Got something else
  