//Create a function that takes both a string and an array of numbers as arguments. Rearrange the letters in the string to be in the order specified by the index numbers. Return the "remixed" string. remix("abcd", [0, 3, 1, 2]) ➞ "acdb" (hard)
//Expected input type : String and Array of numbers.
  
var str = "AkhilRaj";
var arr = [3,4,5,6,7,0,1,2];
//Tried with different inputs like  123,"AkhilRaj",{"Akhil" : 123},["akhi",123],true...

//This function is to rearrange the string characters...
const rearng = (str,arr) =>{ 
  var sng = [];
  for(var x in arr)
    {
      var n = arr[x];
      sng[n] = (str[x]);
      // sng[n].push(str[x]);  //this statement throwing an error Cannot read property 'push' of undefined
    }
  return sng.join("");
}

const reArrng = (str,arr) => {
  return ( (typeof str == 'string') && (Array.isArray(arr)) ? rearng(str,arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = reArrng(str,arr) ;
//Printing the result here
console.log("Rearranged String is " + res)

//Expected output when the Given String 'AkhilRaj' and array [3, 4, 5, 6, 7, 0, 1, 2] is Rearranged String is RajAkhil

//Expected output when the Given input is 123 Rearranged String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Rearranged String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Rearranged String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Rearranged String is Failed to Execute because of Wrongly Entered Input