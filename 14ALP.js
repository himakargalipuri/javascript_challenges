//Given an array of numbers, add every item and return sum
//Expected input type : Array of numbers.
  
var arr = [1,4,6,8,3,7,3,7,9,2];
//Tried with different inputs like  123,"Akhil",{"Akhil" : 123},["akhi",123],true...

//This function is to calculate the sum of the array elements...
const sum = (arr) => {
  var sum = 0;
  var len = arr.length;
  for(var i = 0; i < len; i++)
    {
      sum += arr[i];
    }
  return sum;
}

const sumN = (arr) => {
  return ( (Array.isArray(arr)) ? sum(arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = sumN(arr) ;
//Printing the result here
console.log("Sum of the Array elements " + arr + " is " + res)

//Expected output when the Given Array [1,4,6,8,3,7,3,7,9,2] is Sum of the Array elements 1,4,6,8,3,7,3,7,9,2 is 50

//Expected output when the Given input is "Akhil" Sum of the Array elements Akhil is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Sum of the Array elements Akhil is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is 123 Sum of the Array elements Akhil is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Sum of the Array elements Akhil is Failed to Execute because of Wrongly Entered Input