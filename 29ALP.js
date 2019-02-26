//Return the index of all capital letters
//Expected input type : String with Capital letters in it. (Enter the string like "This is aRe The ChAllEngEs DoNE By AkhIL RaJ.")

var str = "This is aRe The ChAllEngEs DoNE By AkhIL RaJ.";
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This function is to locate the Capital letters indexes...
const capLtrIndx = (str) => {
  
  console.log("Given String is " + str);
  var len = str.length;
  var indx = [];
  for(var i=0;i<len;i++)
    {
    if(str[i].match(/[A-Z]/))
      indx += (i+1) + " ";
    }
  return indx.split(" ");
}
const capLtrIndex= (str) => {
  return ( (typeof str == 'string') ? capLtrIndx(str) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = capLtrIndex(str) ;

console.log("The Indexes of the Capital Letters in the given string are " + res);

//Expected output when the Given String is This is aRe The ChAllEngEs DoNE By AkhIL RaJ. The Indexes of the Capital Letters in the given string are 1,10,13,17,19,22,25,28,30,31,33,36,39,40,42,44,

//Expected output when the Given input is 123. The Indexes of the Capital Letters in the given string are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123}. The Indexes of the Capital Letters in the given string are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123]. The Indexes of the Capital Letters in the given string are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true. The Indexes of the Capital Letters in the given string are Failed to Execute because of Wrongly Entered Input 

//Expected output when the Given input is true. The Indexes of the Capital Letters in the given string are Failed to Execute because of Wrongly Entered Input Uncaught TypeError: indx.split is not a function