//Remove duplicates from array
var arr = [1,2,4,2,5,7,3,5];
 const  duplicate=(arr) => { 
var out = Array.from(new Set(arr));//Here array.form creates new array and set object can store unique values 
console.log(out);
 }
 const dupli=(arr) => {
  return((Array.isArray(arr)) ? duplicate(arr) : "Expected array.got something else");
};
    var res=dupli(arr);//calling the duplicate() function
        

//conclusion
//checked with different inputs like "483",[222],boolean values,array.
//input is array like [1,2,4,2,5,7,3,5]  => output is [1,2,4,5,7,3]
//input is like other than array => output is "Expected array.got something else"

