//28.Return the Objects Keys and Values
var obj={
  'name':"hloo",
  age:20,
  c:'hi'
};
const kv=()=>{
  console.log("object keys are");
console.log(Object.keys(obj));
console.log("object keys are");
console.log(Object.values(obj));
}
const ob=()=>{
  return(((typeof obj=='object')&&(!(Array.isArray(obj))))?kv():console.log("Expected array.got something else"));
};
var res=ob();

//conclusion
//checked inputs with 123,"ty",[1,2,3] and objects
//Expected output for the given input as object {name:"hloo";,age:20,c:'hi'} is object keys are
//                                                                               ['name','age','c']
//                                                                               object values are                                                                                      ['hloo',20,'hi']
//the input other than object it gives a msg of Expected array.got something else