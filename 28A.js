//Return the Objects Keys and Values.
//Expected input type : Object. (Enter the Object.)

var obj ={
  'Name' : 'AKHIL',
  'Age'  : 22,

  'Location' : 'Hyderabad',
  'Hobbies'  : 'Listen Music',

  'Relation' : 'Dosth',
  'NickName'  : 'Akhi'
};
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...
const namesObj= (obj) => {
return ( (typeof obj == 'object') && !(Array.isArray(obj) ) ? namesObjct(obj) : console.log("Failed to Execute because of Wrongly Entered Input") ); 
};

//Calling the function here
var res = namesObj(obj) ;

//This function is to retrieve the Keys and Values from the given object...
function namesObjct(obj)
{
//Print the retrieved Keys
var res = Object.keys(obj);
console.log("KEYS of the Object are " );
console.log(res);

//Print the retrieved Values
var res1 = Object.values(obj);
console.log("VALUES of the Object are " );
console.log(res1);
}
//Expected output when the Given Object is ["Name", "Age", "Location", "Hobbies", "Relation", "NickName"]  VALUES of the Object are ["AKHIL", 22, "Hyderabad", "Listen Music", "Dosth", "Akhi"]

//Expected output when the Given input is 123 Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input