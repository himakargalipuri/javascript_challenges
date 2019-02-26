//20. Return if given number is prime 
var num = 5;

const isPrime = (n) => {
    var c=1;
    for(i=2; i<=Math.sqrt(n); i++){     // dividing the number upto Sqrt(num)
      if(n%i==0){ c+=1; }
    }
    return (c==1) ? "It is a Prime Number" : "Not a Prime Number"
}

//checking various input types
if(!(typeof num == 'number') || num == "") {
  console.log("Expected Number, Got something else");
} else if(num<2){
    console.log("Not a Prime Number")
} else { 
  console.log(isPrime(num));
}
  
          
//conclusion: 
// Checked with 4, 5, -4, "5", [5], true/false, {"a": 5} 
  
//Input: 4;     => Output: Not a Prime Number
//Input: 5;     => Output: It is a Prime Number
//Input: -4;    => Output: Not a Prime Number
//Input: other than number  => Outpt: Expected Number, Got something else
