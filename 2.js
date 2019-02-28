//2. Nearest prime number of a given number

var num = 10;
const isPrime = (n) => {
  var c = 1, j = 2;
  for(; j <= Math.sqrt(n); j++){ //dividing number from 2 to sqrt(n)
    if(n%j == 0){c++}
  }
  return (c == 1) ? true : false
}

const primeNearest = (fn) => {
    var i, k;
    if(fn <2)     //checking for numbers less than 2
        return `Nearest Prime is 2`;

    if(isPrime(fn)){
      return `Nearest Prime is ${fn}`
    } else {
      for(i = fn-1; i > 1; i-- ){  //finding the lower prime number
        if(isPrime(i)) { break; }
      }
      for(k = fn+1; k < +Infinity; k++ ){  //finding the higher prime number
        if(isPrime(k)) { break; }
      }
      return ((fn - i) == (k - fn)) ? `Nearest Primes are ${i} and ${k}`  :  ((fn - i) < (k - fn) ? `Nearest Prime is ${i}`  :  (`Nearest Prime is ${k}`))
      //comparing the distance between number and nearest prime number and returning the closest.
    }
}

const check = (num) => {
  ((isNaN(num)) || (num == Infinity) || (num == -Infinity)) ? console.log("Please enter other than NaN, +Infinity, -Infinity") : console.log(primeNearest(num));
}
//checking various inputs
const  init = () => {
  ((num == "") || !(typeof num == 'number')) ? console.log("Expected Number as input, Got something else") : check(num);
}
init();

//conclusion: 
// Checked with 10, "10", [12], true/false, ((x)=> x)(12);, {"a": 12} 

//Input: 10 or ((x)=> x)(10) IIFE;       => Output: Nearest Prime is 11
//Input: -10                             => Output: Nearest Prime is 2
//Input: NaN or nfinity or -Infinity     => Output: Please enter other than NaN, +Infinity, -Infinity
//Input: other than number               => Output: Expected Number as input, Got something else


    
