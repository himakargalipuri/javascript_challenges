//12.Given an array of strings/numbers return each item of the array as object keyand value as number of repetitions
//Ex:[a,b,c,a,d,c,d,c] = {‘a’:2, ‘b’:1, ‘c’:’3’, ‘d’:2}
var arr=['a','b','c','a','d','c','d','c'];
const Object=(arr)=> {
  var rv = {};
  for (var i = 0; i < arr.length; ++i)
  if(rv[arr[i]]){
    rv[arr[i]] = rv[arr[i]]+1;}
    //console.log(rv);
    else{ 
    rv[arr[i]]=1;}
    console.log(rv);
  }
  const arry=()=>{
    return((Array.isArray(arr))?Object(arr):console.log("Expected array.got something else"));
  }
var res=arry();

//conclusion
//checked different inputs with "qww",123,array,boolean
//Expected output for the given input is{a:2,b:1,c:3,d:2}
//the input other than array then the output is Expected array.got something else