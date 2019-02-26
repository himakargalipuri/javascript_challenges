//18.Find sum of numbers between 1 to n. Dont use loop. Basic maths
  var n=5;
  
  const numsum=(n) => {
  var sum;
  sum=n*(n+1)/2;//sum of n numbers
  console.log(sum);
}
const nums=(n) => {
  return((typeof n=='number') ? numsum(n) : "Expected array.got something else");
};
    var res=nums(n);
  //conclusion
//checked with different inputs like "123",[123],boolean values,array.
//input is number like 5 => output is 15
//input is other than number => output is "Expected array.got something else"


