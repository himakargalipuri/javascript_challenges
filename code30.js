 
//30.split a given array/object by length/2
var arr = ['a', 'b', 'c', 'd', 'e', 'f'];
var obj={'a':1,'b':2,'c':3,'d':4};
const arry=()=>{
var len=arr.length;
var i=len/2;
var firstHalf, secondHalf;
if (i>0) {
  firstHalf = arr.slice(0, i);//slice() method returns the selected elements in an array,as new array
  secondHalf = arr.slice(i , arr.length);    
}
console.log(firstHalf);
console.log(secondHalf);
}
const obj1 = () => {
  var len=0;
  for(let key in obj)
  { 
    len++;
   }
  var firstobject={}; 
  var secondobject={};
    for(let i in obj){
     if(Object.keys(obj).indexOf(i) < len/2){    //comparing index with length
      firstobject[i] = obj[i];
     } else  secondobject[i] = obj[i]; 
     }
    console.log(firstobject);
    console.log(secondobject);
    }
const split=()=>{
  return((Array.isArray(arr))?arry():console.log("Expected array.got something else"))
};
const sobj=()=>{
  return ((typeof obj=='object')?obj1():console.log("Expected array.got something else"))
    }
    var res=split();
    var res1=sobj();
   
    //conclusion
    //checked with different inputs
    //Expected output for the give input (['a', 'b', 'c', 'd', 'e', 'f']) is ['a','b','c'] 
    //                                                                       ['d','e','f']
    //                                    ({'a':1,'b':2,'c':3,'d':4}) is {a:1,b:2} {c:3,d:4}   
    //input other than array and object gives output as Expected array.got something else                                 

  


