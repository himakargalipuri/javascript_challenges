//1.Return factorial of a number
//Validate empty input, number
//Send error number not provided
//Accept only numbers less than 100 and greater than 0

var n = -1;
console.log(typeof n);
const factorial=((x) =>{ return(x==0) ? 1 : x*factorial(x-1)});//Recursive function
//inputs checking
if(n ==""){
  console.log("enter input");
}
 else if(!(typeof n == 'number')){
  console.log("Expected input is wrong");}
else if( n<0 || n>100){
  console.log("please enter number between 0 to 100");
}
else{
  console.log(factorial(n));
}
//conclusion
//In this checked inputs are number,string,array,boolean.
//Given input is number that is 6 then output is 720.
//Input is like string,array and boolean means other than number  => output is "Expected output is wrong".
//Input is more than 100  (102) and less than 0 => output is "please enter number between 0 to 100".


