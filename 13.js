// 13. Given an array of mixed value types. Return an array of their types 
// [1,’adsf’, [a,b], {}, undefined, true] = [number, string, array, object, undefined, 
// boolean] 
var arr = [1, "adsf", {}, undefined, ["a", "b"], true]

//checking valid input
if(!(arr instanceof Array) || arr == ""){  //checking if array or not
  console.log("Expected Array, Got something else");
} else {
    console.log(arr.map((x) => {return typeof x}))
  //using map to go through each element and returning typeof each element x
}
        
  //conclusion: 
  //When returning the typeof [a,b] it give output as 'object' because Arrays in JavaScript are special case of objects (numbered index objects)
  
  // Checked with [1, "adsf", {}, undefined, ["a", "b"], true]], "1, "adsf", {}, undefined, ["a", "b"], true",  {"a": 1, "b": "asdf" "c": {}, "b": true, "a": undefined} 
  //Input: [1, "adsf", {}, undefined, ["a", "b"], true]]     => Output: [ 'number', 'string', 'object', 'undefined', 'object', 'boolean' ]
  //Input: other than array        => Outpt: Expected Number, Got something else
  