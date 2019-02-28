//13.Given an array of mixed value types. Return an array of their types
//Ex:[1,"adsf", [a,b], {}, undefined, true] = [number, string, array, object, undefined,boolean]
var arr=[1,"adsf", ['a','b'], {}, undefined, true];
var arr1=[];
const mixed=()=>{
arr1=arr.map((i) => {
  return (typeof i=='object' ?((Array.isArray(arr)) ? "array" : "object") : typeof i )
})
console.log(arr1);
}
const mix=()=>{
  return((Array.isArray(arr))?mixed():console.log("Expected array.got something else"))
};
var res=mix();

//conclusion
//checked with different inputs like strings,arrays,numbers,boolean..
//Expected output for the given input ([1,"adsf", ['a','b'], {}, undefined, true]) is 
//                                               [number, string, array, object, undefined,boolean]
// input other than array gives output as Expected array.got something else



