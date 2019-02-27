//Replace vowels from a given string with corresponding numbers aeiou=12345 decoration=d2c4r1t34n
//Expected input type : String and a object of Keys and values.

var str = "decoration";
//In the below object you can mention the Keys with values u want to replace them in the given String. 
var objct = {"a" : 1, "e" : 2, "i" : 3, "o" : 4, "u" : 5};
//Tried with different inputs like 123,"decoration",{"Akhil" : 123},["akhi",123],true...

//This function is to replace the vowels with coresponding numbers...
const vowelRplc = str => {
  console.log("Given String is " + str);
  var str = str.split("");
  var len = str.length;

  for (var i = 0; i < len; i++) {
      for(let key in objct){
        if(str[i] == key)
          str[i] = objct[key]
      }
  
    // if (str[i].match(/a/i)) {
    //   str[i] = 1;
    // } else if (str[i].match(/e/i)) {
    //   str[i] = 2;
    // } else if (str[i].match(/i/i)) {
    //   str[i] = 3;
    // } else if (str[i].match(/o/i)) {
    //   str[i] = 4;
    // } else if (str[i].match(/u/i)) {
    //   str[i] = 5;
    // }
  }
  return str.join("");
};

const VowelRplc = str => {
  return typeof str == "string" ? vowelRplc(str) : "Failed to Execute because of Wrongly Entered Input";
};

//Calling the function here
var res = VowelRplc(str);
//Printing the result here
console.log("String after replacing the vowels with respective numbers is " + res);

//Expected output when the Given string decoration is String after replacing the vowels with respective numbers is d2c4r1t34n

//Expected output when the Given input is 123 String after replacing the vowels with respective numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} String after replacing the vowels with respective numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] String after replacing the vowels with respective numbers is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true String after replacing the vowels with respective numbers is Failed to Execute because of Wrongly Entered Input
