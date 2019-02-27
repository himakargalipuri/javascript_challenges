//19.Given an array of objects with names and ages. Return Segregated names inan array (extra points sort by age )
//Ex:[{‘name’: ‘john’, ‘age’:25},{‘name’:’ram’, ‘age’:20}] = [‘john’, ‘ram’]
var arr=[{"name": "john", "age":25},{"name":"ram", "age":20}];
var arr1=[];
const obj1=()=>{
  for(var i in arr ){
arr1=(arr.sort((a,b) => (a.age-b.age))).map((n)=>n.name)//here ages can be sorted by sort
console.log(arr1);
}
}
const arry=()=>{
  return((Array.isArray(arr))?obj1():console.log("Expected array.got something else"))
}
var res=arry();

//conclusion
//checked with different inputs
//Expected output for the given input([{"name": "john", "age":25},{"name":"ram", "age":20}])is  ['ram','john']
//input other than array it will print Expected array.got something else