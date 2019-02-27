// 30. split a given array/object by length/2 

var arr = [2,7,3,1,0,2,8,4,4]
var obj = { "a" : "1", "b" : "44", "c" : "4", "d" : "46", "e" : "84" };

const  initArr = () => {
    ((arr == "") || !(arr instanceof Array)) ? console.log("Expected Array as input, Got something else") : (splitArr(arr));
}
const  initOb = () => {
  ((obj == "") || !(obj instanceof Object) || (obj instanceof Array)) ? console.log("Expected Object as input, Got something else") : (splitObj(obj));
}

const splitArr = (arr) =>{
  var first=[], second=[];
  var len=arr.length;
  var j=0; k=0
  for(let i in arr){
    (i < len/2) ? first[j++] = arr[i] : second[k++] = arr[i]; 
    //comparing index with length and storing in respective new arrays
  }
  console.log("Array after splitting")
  console.log(first)
  console.log(second)
}

  const splitObj = (obj) => {
    var olen=0;
    for(let key in obj){ olen++; }
    var first={}, second={};
      for(let k in obj){
       (Object.keys(obj).indexOf(k) < olen/2) ? first[k] = obj[k] : second[k] = obj[k]; 
       //comparing index with length and storing in respective new objects
      }
      console.log("Object after splitting")
      console.log(first)
      console.log(second)
  }

initArr();
initOb();
     
//Conclusion: 
// Checked with arr = [2,7,3,1,0,2,8,4,4] obj = { "a" : "1", "b" : "44", "c" : "4", "d" : "46", "e" : "84" }, 
//          arr =1234 obj ="ani", arr =true obj = [1,2,3,4]
  
//  Input: arr = [2,7,3,1,0,2,8,4,4] obj = { "a" : "1", "b" : "44", "c" : "4", "d" : "46", "e" : "84" }
//  => Output: 
//      Array after splitting
//      [ 2, 7, 3, 1, 0 ]
//      [ 2, 8, 4, 4 ]
//      Object after splitting
//      { a: '1', b: '44', c: '4' }
//      { d: '46', e: '84' }
//Input: other than Array/Object   => Output: Expected Array/Object as input, Got something else
  