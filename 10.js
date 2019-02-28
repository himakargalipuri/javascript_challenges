// 10. Replace vowels/pattern from a given string with corresponding numbers 
// aziru = 12345 
// decorationzebra = dec4r1t34n2ebr1

var obj = {"a": 1, "z": 2, "i": 3, "r":4, "u":5};
var str = "decorationzebra"

const vowelReplace = (str) => {
  var arr = str.split("")
   for(let i in arr) {       //matching every key and replacing with corresponding value/number
      for(let key in obj){
        if(arr[i] == key){arr[i] = obj[key]}
      }
  }
  return arr.join().replace(/,/g, "");
}

const  init = () => {
  !(typeof str == 'string') ? console.log("Expected String as input, Got something else") : ((str == "") ? console.log("Please Enter a non-empty String") : console.log(vowelReplace(str)));
  //checking the input value
}

init();

     
//Conclusion:   
// pattern: aziru = 12345
// Checked str with "decorationzebra", 6478, ["decorationzebra"], true/false, 
//          {"d": "e", "c": "o", "r": "a"}, null, undefined, "", Infinity, -Infinity, NaN 
  
//Input: "decorationzebra"    => Output: dec4r1t34n2ebr1
//Input: ""                   => Output: Please Enter a non-empty String
//Input: other than String    => Output: Expected String as input, Got something else