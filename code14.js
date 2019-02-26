//14.Given an array of numbers, add every item and return sum
  
  var arr=[3,4,2,5,6];
  var sum = 0;
  function arraysum(){
  for(var i = 0; i < arr.length; i++)
    {
      sum += parseInt(arr[i]);
    }
    console.log(sum);
  }
  const arrays=(arr) => {
    return((Array.isArray(arr)) ? arraysum(arr) : "Expected array.got something else");
  };
      var res=arrays(arr);//calling the sum() function
  
  //conclusion
//checked with different inputs like "123",123,boolean values,array.
//input is array like [3,4,2,5,6] => output is 20
//input is other than an array => output is "Expected array.got something else"


  