//Eliminate odd numbers in an array
//Expected input type : Array.

var arr = [1,4,2,7,11,9,6,5,4,2,8,6,12];
//Tried with different inputs like  123,{"Akhil" : 123},"Akhil",true...

//This function is to eliminate the odd numbers from the given Array...
const Oddnum = (arr) =>{
    console.log("Given input is ");
  console.log(arr);
      var filtered = arr.filter(isEven);
     
      function isEven(value) {
        return (value % 2 == 0);
        }
	  return filtered;
}

const Oddnumb = (arr) => {
  return ( (Array.isArray(arr)) ? Oddnum(arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = Oddnumb(arr) ;

//Printing the result here
console.log("Array after Eleminating the Odd Numbers is ");
console.log(res);

//Expected output when the Given array is Array after Eleminating the Odd Numbers is  [4, 2, 6, 4, 2, 8, 6, 12]

//Expected output when the Given input is 123 Array after Eleminating the Odd Numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Array after Eleminating the Odd Numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is "Akhil" Array after Eleminating the Odd Numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Array after Eleminating the Odd Numbers is Failed to Execute because of Wrongly Entered Input
