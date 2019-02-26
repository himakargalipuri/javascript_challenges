  //7.Eleminate odd numbers in an array
  var arr = [3,2,6,8,9,1];
  const odd=(arr) => {
  for (var i = 0; i < arr.length; i++) {
  if ((arr[i] % 2) == 1) {
      arr.splice(i, 1);
        i = i-1;
    }
}
console.log(arr);//after removing odd
  }
  if(arr=="")
 console.log("Enter input");
else if(!(typeof arr=='object'))
    console.log("Expected array.got something else");
else 
var res=odd(arr);//call the function odd()
  
//conclusion
//checked with different inputs like "234",[123],boolean values,array.
//input is array like [3,2,6,8,9,1] => output is [2,6,8]
//input is other than an array => output is "Expected input is not valid"
