//16.Given a number of 10 digits (0000000000) convert it “+1 (000) 000-0000”format
n=1023004000;
var a = n.toString().split("");
const phone=()=>{
if(a.length < 10)
  {
    console.log("please enter 10 digits number");
  }
else
console.log("+1" + " " + "(" + a[0]+a[1]+a[2] + ")" + " " + a[3]+a[4]+a[5] + "-" + a[6]+a[7]+a[8]+a[9])
}
const ph=()=>{
  return((typeof n=='number')?phone():console.log("Expected array.got something else"));
}
var res=ph();

//conclusion
//checked with different inputs like [1,2,3],{a:20},"qw".
//Expected output for the given input is(1023004000) +1 (102) 300-4000
//input other than number gives output as Expected array.got something else
//the input less than 10 digits gives output as please enter 10 digits number