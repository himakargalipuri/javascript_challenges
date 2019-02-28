//split a given array/object by length/2.
//Expected input type : Array. (Enter the array like [1,2,3,4,5,6,7,8]) and a Object.

var stng = [1,2,3,4,5,6,7,8];
var len = (stng.length)/2;
var obj = {
  "NAME" : "AKHIL",
  "AGE" : 22,
  "HEIGHT" : 6,
  "RANK" : 1
}

//Tried with different inputs like  {  "NAME" : "AKHIL",  "AGE" : 22,  "HEIGHT" : 6,  "RANK" : 1},"akhil",[1,2,3,4,5,6,7,8],1234567,true... 

//This function is to split the given array...
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

//This function is to split the  given object...
const spltObj = (obj) => {
  var c=0;
  for(let key in obj)
    c++;
  var obj1 = {};
  var obj2 = {};
  for(let k in obj){
    if((Object.keys(obj).indexOf(k) < c/2))
      obj1[k] = obj[k];
    else
      obj2[k] = obj[k]; 
  }
  console.log("These are the Splits at (length/2) of given Object ");
  console.log(obj1);
  console.log(obj2);
}

const spltArray = (stng,len) => {
  return ( ( (Array.isArray(stng) && (typeof len == 'number') ) ) ? spltArr(stng, len) : "Failed to Execute because of Wrongly Entered Input"); 
};

const spltObject = (obj) => {
  return ( ( ( (typeof obj == 'object') && !(Array.isArray(obj)) ) ) ? spltObj(obj) : console.log("Failed to Execute because of Wrongly Entered Input") ); 
};

//Calling the function here
var result = spltArray(stng,len);
spltObject(obj);

//Printing the results
console.log("These are the Splits at (length/2) of given Array " ); 
if(Array.isArray(result)){
  for(var x in result)
  console.log(result[x]);
}
else
  console.log(result);


//Expected output when the Given array [1,2,3,4,5,6,7,8] and a Object is 
//These are the Splits at (length/2) of given Array  (4) [1, 2, 3, 4] (4) [5, 6, 7, 8]  
//These are the Splits at (length/2) of given Object {NAME: "AKHIL", AGE: 22} {HEIGHT: 6, RANK: 1}

//Expected output when the Given input is 123 These are the Splits at given length  Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true These are the Splits at given length  Failed to Execute because of Wrongly Entered Input