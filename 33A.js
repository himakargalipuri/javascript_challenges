//Merge two arrays/objects
//Expected input type : Array and object (Enter the Array and Objects)

var str1 = ["This is First String", 123];
var str2 = ["This is Second String", 456];

var obj1 = {
   "Name" : "Akhil",
   "Relationship" : "Dosth"
 };
var obj2 = {
   "Location" : "Hyderabad",
   "R-status" : "Single"
 };
 
//Tried with different inputs like "akhil",{"Akhil" : 123},["akhi",123],...

const mergArr = (str1,str2) => {
 
  var newStr = str1.concat(str2);
  return newStr;
 
 }
 
 const mergObj = (obj1,obj2) => {
  //Using the Spread Operator "..." from ES6 here to do the basic merge operation.
  let merged = {...obj1, ...obj2};
  return merged;
 }

 
const mergArray = (str1,str2) => {
 return (Array.isArray(str1) && (Array.isArray(str2)) ? mergArr(str1,str2) : "Failed to Execute because of Wrongly Entered Input"); 
};

const mergObject = (obj1,obj2) => {
 return ( ( (typeof obj1 == 'object') && !(Array.isArray(obj1)) ) && ( (typeof obj2 == 'object') && !(Array.isArray(obj2)) ) ? mergObj(obj1,obj2) : "Failed to Execute because of Wrongly Entered Input");
};

//Calling the Merging array function here
var newArr = mergArray(str1,str2) ;

console.log(" New Array after Merging the two given Arrays is ");
console.log(newArr);

//Calling the merging object function here
var newObj = mergObject(obj1,obj2) ;

console.log(" New Object after Merging the two given Objects is ");
console.log(newObj);

//Expected output After merging the given input As Array is  New Array after Merging the two given Arrays is  ["This is First String", 123, "This is Second String", 456]

//Expected output After merging the given input As Object is   New Object after Merging the two given Objects is {Name: "AKHIL", Relationship: "Dosth", Location: "Hyderabad", R-status: "Single"}

//Expected Output for the given input 7 is  New Array after Merging the two given Arrays is Failed to Execute because of Wrongly Entered Input

//Expected Output for the given input "akhil" is New Array after Merging the two given Arrays is Failed to Execute because of Wrongly Entered Input

//Expected Output for the given input {"Akhil" : 123} is New Array after Merging the two given Arrays is Failed to Execute because of Wrongly Entered Input

//Expected Output for the given input ["akhi",123]  is New Array after Merging the two given Arrays is Failed to Execute because of Wrongly Entered Input


