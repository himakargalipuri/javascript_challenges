//Find missing value in an array of numbers
//Expected input type : Array.

var arr = [1,3,4,2,7,15,12];
var len = arr.length;
var arr1 = [];
console.log(" Given Array is " + arr);

//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This function is to find the missing number in the given array range...
  
const misval = (arr) => {

    for (var i = 0; i < len; i++) {
      for (var j = 0; j < len; j++) {
        if (arr[i] === arr[j])
          arr1[arr[j]] = 1;
      }
    }
    var str = [];
    for (var i = 0; i < arr1.length; i++) {
      if (arr1[i] == null) 
        str.push(i);
    }
    return str;
  }

const misVal = (arr) => {
  return ( (Array.isArray(arr)) ? misval(arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = misVal(arr) ;

console.log("The list of missing values in the given array are ");
console.log(res);

//Expected output when the Given Array is The list of missing values in the given array are [0, 5, 6, 8, 9, 10, 11, 13, 14]

//Expected output when the Given input is "Akhil" The list of missing values in the given array are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is 123 The list of missing values in the given array are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} The list of missing values in the given array are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true The list of missing values in the given array are Failed to Execute because of Wrongly Entered Input