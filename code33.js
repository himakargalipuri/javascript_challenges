//33.merge two arrays or objects
  var arr1="23";
  var arr2=[6,7,8];
  var arr3;
  var obj1={name:"swa"};
  var obj2={age:20};
  var obj3={};
  const arrmer=()=>{
  arr3=arr1.concat(arr2);
  console.log("merged array is");
  console.log(arr3);
  }
const objmer=()=>{
  obj3=Object.assign(obj1, obj2);
  console.log("merged object  is");
  console.log(obj3);
}
const ar=()=>{
return((Array.isArray(arr1))&&(Array.isArray(arr2)) ? arrmer(arr3) :console.log( "Expected array.got something else"));
};
const ob=()=>{
  return((typeof obj1=='object')&&(typeof obj2=='object')? objmer() :console.log( "Expected array.got something else") );
};
var res=ar();
var res=ob();

//conclusion
//Expected output for the given input([2,3,4][5,6,7]) is an array->[2,3,4,6,7,8]
//Expected output for the given input is object({name:"swa"}{age:20})->{name:'swa',age:20}
//input is like string or number then output is Expected array.got something else