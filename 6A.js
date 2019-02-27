//Given an array of mixed even and odd numbers. Sort only even numbers. Ignore odd numbers and their positions (hard) [8, 2, 3, 6, 5, 9, 1, 4, 7] [2, 4, 3, 6, 5, 9, 1, 8, 7]
//Expected input type : Array of numbers.
  
var arr = [1,2,3,4,34,6,75,48,1,43,25,46,23];
//Tried with different inputs like  123,"Akhil",{"Akhil" : 123},[1,2,3,4,34,6,75,48,1,43,25,46,23,],true...

//This function is to Sort the even numbers ...
const evensort = (arr) =>{
  console.log("Given array is ");
  console.log(arr);
  for(var i = 0;i < arr.length; i++)
  {
    if((arr[i] % 2) == 0)
      {
        for(var j = 0; j<arr.length; j++)
        {
          if((arr[j] % 2) == 0)
          {
          		if(arr[i] < arr[j])
                {
                	var temp = arr[i];
                  	arr[i] = arr[j];
                  	arr[j] = temp;
                }	                 
          }
        }
      }
  }
  return arr;
}


const evenSort = (arr) => {
  return ( (Array.isArray(arr)) ? evensort(arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = evenSort(arr) ;
//Printing the result here
console.log("Array after Sorting with only Even numbers is ");
console.log(res);

//Expected output when the Given Array [1,2,3,4,34,6,75,48,1,43,25,46,23] is Array after Sorting with only Even numbers is [1,2,3,4,6,34,75,46,1,43,25,48,23].

//Expected output when the Given input is "Akhil" Array after Sorting with only Even numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Array after Sorting with only Even numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Array after Sorting with only Even numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Array after Sorting with only Even numbers is Failed to Execute because of Wrongly Entered Input