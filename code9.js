//Remove duplicates from array
var arr = [1,2,4,2,5,7,3,5];
 function duplicate(){ 
var out = Array.from(new Set(arr));//Here array.form creates new array and set object can store unique values 
console.log(out);
 }
     if(arr== " ")
    console.log("Enter input");
    else if(!(typeof arr=='object'))
    console.log("Expected input is not valid");
      else{
    duplicate();//calling the duplicate() function
        }

//conclusion
//checked with different inputs like "483",[222],boolean values,array.
//input is number like [1,2,4,2,5,7,3,5]  => output is [1,2,4,5,7,3]
//input is like other than array => output is "Expected input is not valid"

