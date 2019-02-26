//Change every 4th character of a string to number 4 “This is a fourth character” = “Thi4 is a 4our4h ch4rac4er”
//Expected input type : String. (Enter the string like "This is aRe The ChAllEngEs DoNE By AkhIL RaJ.")

var str = "This is aRe The ChAllEngEs DoNE By AkhIL RaJ.";
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This function is to make every 4th char as 4 the given string...
const charAt4 = (str) => {
  console.log("Entered Sentence is :- " + str);
  var arr = str.split("");
  var temp = 0;
  for (var x in arr) {
    if (arr[x] != " ") {
      temp++;
    if (temp == 4) {
        arr[x] = 4;
        temp = 0;
      }
    }
  }
  var stg = arr.join("");
  return stg;
}
const capLtrAt4 = (str) => {
  return ( (typeof str == 'string') ? charAt4(str) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = capLtrAt4(str) ;

console.log("The Resulting String is " + res);

//Expected output when the Given String is The Resulting String is Thi4 is a4e Th4 ChA4lEn4Es D4NE B4 Akh4L Ra4.

//Expected output when the Given input is 123 The Resulting String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} The Resulting String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] The Resulting String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true The Resulting String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true The Resulting String is Failed to Execute because of Wrongly Entered Input