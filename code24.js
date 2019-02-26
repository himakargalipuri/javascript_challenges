//24.Is the given number symmetrical
var number=121;
const symm=(number)=>{
var temp=number;
  var sum=0;
  var rem;
  while (number > 0) {
      rem =Math.floor(number % 10);
      number = Math.floor(number / 10);
      sum=Math.floor(sum*10+rem);//math.floor returns the value down to its nearest integer
}
      if (temp == sum) {
          console.log("num is  symmetrical");
      }
else
  console.log("num is not  symmetrical");
}
//checking inputs
const nums=(number) => {
  return((typeof number=='number') ? symm(number) : "Expected array.got something else");
};
    var res=nums(number);//calling the nums() function
  

  //conclusion
//checked with different inputs like "345",[123],boolean values,array.
//input is number like 121 => output is num is symmetrical
//input is other than number => output is "Expected array.got something else"
