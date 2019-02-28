//15.create a function that takes both a string and an array of numbers asarguments. Rearrange the letters in the string to be in the order specified bythe index numbers. Return the "remixed" string.
//EX:remix("abcd", [0, 3, 1, 2]) ➞ "acdb"
var arry=['0','3','1','2'];
var str="abcd";

const remix=()=>{
  var arr1=[];
  for(var i in arry){
    var x=arry[i];
    arr1[x]=(str[i]); 
  }
  arr2=arr1.join()
  console.log(arr2);  
}
const rem=()=>{
  return((typeof str=='string')&&(Array.isArray(arry))?remix():console.log("Expected array.got something else"));
};
var res=rem();

//conclusion
//checked with different inputs like num,object ,string,array. 
//Expected output for the given input  ("abcd", [0, 3, 1, 2]) is a,c,d,b
//the input is other than an array and string it gives output as Expected array.got something else 

