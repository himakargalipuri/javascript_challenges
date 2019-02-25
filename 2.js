//2. Nearest prime number of a given number (medium) 

var num = 12, arr = [];
arr = [2, 3, 5, 7, 11, 13, 7, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]
function findPrime(n){
    var len=arr.length;
    if(n<2)     //checking for negetive numbers
        return `Nearest Prime is ${arr[0]}`;
    for(let i =0; i<len; i++){
        if(n==arr[i]){ return `${arr[i]} is Prime already`;}  //checking if it is prime already
        if(n>arr[i] && n<arr[i+1]){   //checking between two prime numbers
          if(n-arr[i] < arr[i+1]-n){ 
            return `Nearest Prime is ${arr[i]}`;
          }
        return `Nearest Prime is ${arr[i+1]}`;
        }
    }
}
//checking various inputs
if(num == ""){
  console.log("Number not provided");
}else if(!(typeof num == 'number')) {
  console.log("Expected Number, Got something else");
} else { 
  console.log(findPrime(num));
}

//conclusion: 
// Checked with 12, "12", [12], true/false, ((x)=> x)(12);, {"a": 12} 

//Input: 12 or ((x)=> x)(12) IIFE;       => Output: Nearest Prime is 13
//Input: other than number               => Outpt: Expected Number, Got something else


    
