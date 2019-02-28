// 30. Split a given array/object by length/2 

var arr = [2,7,3,1,0,2,8,4,4]
var obj = { "a" : "1", "b" : "44", "c" : "4", "d" : "46", "e" : "84" };

const splitArr = (arr) => {
  let first = [], second = [], len = arr.length, j = 0, k = 0;
  for(let i in arr){
    (i < len/2) ? first[j++] = arr[i] : second[k++] = arr[i]; 
    //comparing index with length and storing in respective new arrays
  }
  console.log("Array after splitting")
  console.log(first)
  console.log(second)
}

  const splitObj = (obj) => {
    let olen = 0;
    for(let key in obj){ olen++; }
    let first = {}, second = {};
      for(let k in obj){
       (Object.keys(obj).indexOf(k) < olen/2) ? first[k] = obj[k] : second[k] = obj[k]; 
       //comparing index with length and storing in respective new objects
      }
      console.log("Object after splitting")
      console.log(first)
      console.log(second)
  }


  const  initArr = () => {
    !(arr instanceof Array) ? console.log("Expected Array as input, Got something else") : splitArr(arr);
  }
  const  initOb = () => {
    if(obj == null) {
      console.log("Please enter other than null object")
    } else {
      !(obj instanceof Object) || (obj instanceof Array) ? console.log("Expected Object as input, Got something else") : splitObj(obj);
    }
  }
initArr();
initOb();
     
//Conclusion: 
// Checked with arr = [2,7,3,1,0,2,8,4,4] obj = { "a" : "1", "b" : "44", "c" : "4", "d" : "46", "e" : "84" }, 
//          arr =1234 obj ="ani", arr =true obj = [1,2,3,4], null, undefined, "", NaN, Infinity, -Infinity
  
//  Input: arr = [2,7,3,1,0,2,8,4,4] obj = { "a" : "1", "b" : "44", "c" : "4", "d" : "46", "e" : "84" }
//  => Output: 
//      Array after splitting
//      [ 2, 7, 3, 1, 0 ]
//      [ 2, 8, 4, 4 ]
//      Object after splitting
//      { a: '1', b: '44', c: '4' }
//      { d: '46', e: '84' }
//Input: null                      => Output: Please enter other than null object
//Input: other than Array/Object   => Output: Expected Array/Object as input, Got something else
  