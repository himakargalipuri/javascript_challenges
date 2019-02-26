//split a given array/object by length/2.
//Expected input type : Array. (Enter the array like [1,2,3,4,5,6,7,8])

var stng = [1,2,3,4,5,6,7,8];
var len = 4;
//Tried with different inputs like  "akhil",{"Akhil" : 123},1234567,true...

//This function is to make the split a given array...
const spltArr = (stng, len) => {
    var n = stng.length;
    var tempArr = [];
  var spltpart;
    for (i = 0; i < n; i += len) {
        spltpart = stng.slice(i, i+len);
        tempArr.push(spltpart);
    }  
    return tempArr;
}

const spltArray = (stng,len) => {
  return ( ( (Array.isArray(stng) && (typeof len == 'number') ) ) ? spltArr(stng, len) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var result = spltArray(stng,len);
//Printing the results
console.log("These are the Splits at given length " ); 
if(Array.isArray(result)){
  for(var x in result)
  console.log(result[x]);
}
else
  console.log(result);


//Expected output when the Given array [1,2,3,4,5,6,7,8] is These are the Splits at given length  (4) [1, 2, 3, 4] (4) [5, 6, 7, 8]

//Expected output when the Given input is 123 These are the Splits at given length  Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} These are the Splits at given length  Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] These are the Splits at given length  Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true These are the Splits at given length  Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true These are the Splits at given length  Failed to Execute because of Wrongly Entered Input