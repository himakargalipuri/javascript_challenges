//Given an array of strings/numbers return each item of the array as object key and value as number of repetitions [a,b,c,a,d,c,d,c] = {‘a’:2, ‘b’:1, ‘c’:’3’, ‘d’:2}
//Expected input type : Array.
  
var arr = ["a","a","a","f","f","s","d","f","akhil","akhil",1,2,2,3,3,2,1];
//Tried with different inputs like  123,{"Akhil" : 123},["a","a","a","f","f","s","d","f","akhil","akhil",1,2,2,3,3,2,1],true...

//This function is to calculate the repitations in the given Array...
const Obj = (arr) => {
  console.log("Given Array is " + arr);

  var len = arr.length;
  var obj = {};
  for (var i = 0; i < len; i++) 
   { 
       if(obj[arr[i]])
         {
           obj[arr[i]] = obj[arr[i]] + 1;
         }
     else{
       obj[arr[i]] = 1;
     }
   }
  return obj;
}

const rept = (arr) => {
  return ( (Array.isArray(arr)) ? Obj(arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = rept(arr) ;
//Printing the result here
console.log("Number of Repitations are ")
  console.log(res);

//Expected output when the Given input as Array is Number of Repitations are {1: 2, 2: 3, 3: 2, a: 3, f: 3, s: 1, d: 1, akhil: 2}

//Expected output when the Given input is 123 Number of Repitations are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Number of Repitations are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Number of Repitations are Failed to Execute because of Wrongly Entered Input