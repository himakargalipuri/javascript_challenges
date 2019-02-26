//Reverse a string
//Expected input type : String  (Enter the any string like "This is aRe The ChAllEngEs DoNE By AkhIL RaJ.")

var str = "This is aRe The ChAllEngEs DoNE By AkhIL RaJ.";
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This function is to make the reverse of the given string...
const reverse = (str) => {
    console.log(str);
    var len = str.length;

    var stng = [];
    for(var i=len;i>=0;i--)
        stng += str[i];
    return (stng.split("").splice(9,).join(""));
}

const rev = (str) => {
  return ( (typeof str == 'string') ? reverse(str) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = rev(str) ;

console.log("The reverse of the given string is " + res);

//Expected output when the Given String is This is aRe The ChAllEngEs DoNE By AkhIL RaJ. The reverse of the given string is .JaR LIhkA yB ENoD sEgnEllAhC ehT eRa si sihT

//Expected output when the Given input is 123 The reverse of the given string is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} The reverse of the given string is  Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] The reverse of the given string is  Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true The reverse of the given string is  Failed to Execute because of Wrongly Entered Input 

//Expected output when the Given input is true The reverse of the given string is Failed to Execute because of Wrongly Entered Input Uncaught TypeError: indx.split is not a function