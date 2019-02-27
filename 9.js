//Remove duplicates from array
//Expected input type : Array of numbers or strings.

var arr = ["asd", "asd", "a", "a", "s", 1, 2, 1, 3, 4];

//Tried with different inputs like  ["asd","asd","a","a","s",1,2,1,3,4],123,[1,1,2,3,3,1,1,2,3,3,4,4,2],"Akhil",{"Akhil" : 123},["akhi",123],true...

//This function is to calculate the sum...
const sortuniQ = arr => {
  console.log("The Array given with duplicates is ");
  console.log(arr);
  //Spread operator(...) used to iterate over an array elements and also it returns a new array and Set() function to get the unique numbers or string in an array...
  let uniqnum = [...new Set(arr)];
  return uniqnum;
};

const uniQ = arr => {
  return Array.isArray(arr) ? sortuniQ(arr) : "Failed to Execute because of Wrongly Entered Input";
};

//Calling the function here
var res = uniQ(arr);
//Printing the result here
console.log("The Array after removing the duplicates is ");
console.log(res);

//Expected output when the Given Array ["asd","asd","a","a","s",1,2,1,3,4] is The Array after removing the duplicates is ["asd", "a", "s", 1, 2, 3, 4]

//Expected output when the Given input  "Akhil" is The Array after removing the duplicates is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input {"Akhil" : 123} is The Array after removing the duplicates is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input 123 is The Array after removing the duplicates is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input true is The Array after removing the duplicates is Failed to Execute because of Wrongly Entered Input
//ASDFadsfkb asf;la aflu asdf ljhvad 