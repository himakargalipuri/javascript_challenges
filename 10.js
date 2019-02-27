// 10. Replace vowels from a given string with corresponding numbers 
// aeiou=12345 
// decoration=d2c4r1t34n

var str = "decoration"
  
const  init = () => {
  ((str == "") || !(typeof str == 'string')) ? console.log("Expected String as input, Got something else") : console.log(vowelReplace(str));
  //checking the input value
}

const vowelReplace = (str) => {
  var arr = str.split("")
   for(let i in arr) {       //matchin every vowel and replacing with corresponding number
     if(arr[i]=== "a" || arr[i] === "A"){arr[i] = 1}
     else if(arr[i]=== "e" || arr[i] === "E"){arr[i] = 2}
     else if(arr[i]=== "i" || arr[i] === "I"){arr[i] = 3}
     else if(arr[i]=== "o" || arr[i] === "O"){arr[i] = 4}
     else if(arr[i]=== "u" || arr[i] === "U"){arr[i] = 5}
     else {continue}
   }
  return arr.join().replace(/,/g, "");
}

init();

     
//Conclusion: 
// Checked with "decoration", 1234,  ["decoration"], true/false,  {"d": "e", "c": "o", "r": "a"} 
  
//Input: "hElo WorLD!"       => Output: d2c4r1t34n
//Input: other than String   => Output: Expected String as input, Got something else
  