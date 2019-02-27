// 10. Replace vowels from a given string with corresponding numbers 
// aeiou=12345 
// decoration=d2c4r1t34n

var obj = {"x": 1, "y": 2, "c": 3, "s":4, "e":5};
var str = "decorationxy"
  
const  init = () => {
  ((str == "") || !(typeof str == 'string')) ? console.log("Expected String as input, Got something else") : console.log(vowelReplace(str));
  //checking the input value
}

const vowelReplace = (str) => {
  var arr = str.split("")
   for(let i in arr) {       //matchin every vowel and replacing with corresponding number
      for(let key in obj){
        if(arr[i] == key){arr[i] = obj[key]}
      }
  }
  return arr.join().replace(/,/g, "");
}

init();

     
//Conclusion: 
// Checked with "decoration", 1234,  ["decoration"], true/false,  {"d": "e", "c": "o", "r": "a"} 
  
//Input: "hElo WorLD!"       => Output: d2c4r1t34n
//Input: other than String   => Output: Expected String as input, Got something else

