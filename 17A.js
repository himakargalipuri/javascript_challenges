//Validate if given input is array.
//Expected input type : 1st is Array and the 2nd is object.

var arr = ["akhi", 123];
var obj = {"Akhil" : 123};
//Tried with different inputs like  "Akhil",123,"{"Akhil" : 123}",["akhi",123],true...

const arry = (arr) => {
  return ( (Array.isArray(arr)) ? console.log("It is an ARRAY.") : console.log("It is not a Array.") ); 
};

const objt = (obj) => {
  return ( ( typeof obj == "object" && !(Array.isArray(obj)) ) ? console.log("It is an OBJECT.") : console.log("It is not a object.") ); 
};

//Calling the array and object functions here
arry(arr);

objt(obj);

//Expected output when the Given Array and object is It is an ARRAY. It is an Object.

//Expected output when the Given input is 123 It is not a Array. It is not a object.

//Expected output when the Given input is "Akhil" It is not a Array. It is not a object.

//Expected output when the Given input is true It is not a Array. It is not a object.