//2. Nearest prime number of a given number

var num = 12;
const isPrime = (n) =>{
  var c = 1, j;
  for(j = 2; j <= Math.sqrt(n); j++){ //dividing number from 2 to sqrt(n)
    if(n%j == 0){c++}
  }
  if(c==1){return n}
}

const primeNearest = (num) => {
    var l=0,h=0
    if(num<2)     //checking for negetive numbers
        return `Nearest Prime is 2`;

    if(num  == isPrime(num)){
      return `Nearest Prime is ${num}`
    } else {
      for(let i=num-1; i>1; i-- ){  //finding the lower prime number
        l = isPrime(i)
        break;
      }
      for(let k=num+1; k < +Infinity; k++ ){  //finding the higher prime number
        h = isPrime(k)
        break;
      }
      return ((num - l) < (h - num)) ? `Nearest Prime is ${l}`  :  `Nearest Prime is ${h}`
      //comparing the distance between number and nearest prime number and returning the closest.
  }
}

//checking various inputs
const  init = () => {
  ((num == "") || !(typeof num == 'number')) ? (console.log("Expected Number, Got something else")) : console.log(primeNearest(num));
}
init();
//conclusion: 
// Checked with 12, "12", [12], true/false, ((x)=> x)(12);, {"a": 12} 

//Input: 12 or ((x)=> x)(12) IIFE;       => Output: Nearest Prime is 13
//Input: other than number               => Outpt: Expected Number, Got something else


    
