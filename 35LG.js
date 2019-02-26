//Convert celsius data to fahrenheit
//Expected input type : number. (Enter the tempeture as a number.)

var cel = 100;
//Tried with different inputs like  "akhil",{"Akhil" : 123},["akhi",123],true...

//This function is to convert the celsius to fahrenheit...
const celcon = (cel) => {
  var fahr = 0;
  fahr = (cel * (9/5)) + 32;
  return fahr;
}

const celsius = (str) => {
  return ( (typeof str == 'number') ? celcon(cel) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = celsius(cel) ;

console.log("The " + cel + " degree Celsius Tempeture in Fahrenheit is " + res);

//Expected output when the Given input is The 100 degree Celsius Tempeture in Fahrenheit is 212

//Expected output when the Given String is The 100 degree Celsius Tempeture in Fahrenheit is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} The {"Akhil" : 123} degree Celsius Tempeture in Fahrenheit is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] The ["akhi",123] degree Celsius Tempeture in Fahrenheit is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true The true degree Celsius Tempeture in Fahrenheit is Failed to Execute because of Wrongly Entered Input