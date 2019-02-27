//20. Return if given number is prime 
var num = 5;

const isPrime = (n) => {
  if(n<2){return n + " is not a Prime Number"}
  var c=1;
    for(i=2; i<=Math.sqrt(n); i++){     // dividing the number upto Sqrt(n)
      if(n%i==0){ c+=1; }
    }
    return (c==1) ? n + " is a Prime Number" : n + " is not a Prime Number"
}

//checking various input types
const  init = () => {
  ((num == "") || !(typeof num == 'number')) ? (console.log("Expected Number as input, Got something else")) : console.log(isPrime(num));
}

init();
//conclusion: 
// Checked with 4, 5, -4, "5", [5], true/false, {"a": 5} 
  
//Input: 4;     => Output: 4 is not a Prime Number
//Input: 5;     => Output: 5 is a Prime Number
//Input: -4;    => Output: -4 is not a Prime Number
//Input: other than number  => Outpt: Expected Number, Got something else
