// 13. Given an array of mixed value types. Return an array of their types 
// [1,’adsf’, [a,b], {}, undefined, true] = [number, string, array, object, undefined, boolean] 

var arr = [1, "adsf", {}, undefined, ["a", "b"], true]

const typeOf = (arr) => {
  console.log(arr.map((x) => {
      return (typeof x == 'object' ? ((x instanceof Array) ? "array" : "object") : typeof x )
      //using map to go through each element and returning typeof each element x
    }
  ))
}
const  init = () => {
  !(arr instanceof Array) ? console.log("Expected array, Got something else") : typeOf(arr);
  //checking the input value
}
init();

  //conclusion: 
  //When returning the typeof [a,b] it give output as 'object' because Arrays in JavaScript are special case of objects (numbered index objects)
  
  // Checked with [1, "adsf", {}, undefined, ["a", "b"], true]], 1, "adsf", {}, undefined, ["a", "b"], true",  
  //      {"a": 1, "b": "asdf" "c": {}, "b": true, "a": undefined}, null, undefined, "", NaN 
  //Input: [1, "adsf", {}, undefined, ["a", "b"], true]]     => Output: [ 'number', 'string', 'object', 'undefined', 'array', 'boolean' ]
  //Input: other than array        => Outpt: Expected array, Got something else
  