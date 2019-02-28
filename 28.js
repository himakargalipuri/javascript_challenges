//28 Return the Objects Keys and Values 
//({a: 1, b: 2, c: 3}) ➞ [["a", "b", "c"], [1, 2, 3]] 

var myObj = {a: 1, b: 2, c: 3, d: 4}

const getValues = (obj) => {
    var j=0, val=[];
    for(let x in obj){
      (val[j++] = obj[x]);  //storing the values of obj in val
    }
    return [Object.getOwnPropertyNames(myObj), val] //returning keys and values.
}

const  init = () => {
  if(myObj == null) {
    console.log("Please enter other than null object")
  } else {
    !(myObj instanceof Object) || (myObj instanceof Array) ? console.log("Expected Object as input, Got something else") : console.log(getValues(myObj));
  }
}
init()
//Conclusion: 
// Checked inpput with {a: 1, b: 2, c: 3, d: 4}, 1234, "1234", [1,2,3,4], true/false, null, undefined, "", NaN, Infinity, -Infinity
//Input: {a: 1, b: 2, c: 3, d: 4}           => Output: [ [ 'a', 'b', 'c', 'd' ], [ 1, 2, 3, 4 ] ]
//Input: {a: 1, b: [1,2,3,4], c: 3, d: 4}   => Output: [ [ 'a', 'b', 'c', 'd' ], [ 1, [ 1, 2, 3, 4 ], 3, 4 ] ]
//Input: null                               => Output: Please enter other than null object
//Input: other than Object                  => Output: Expected Object, Got something else.