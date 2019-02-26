//Given an array of objects with names and ages. Return Segregated names in an array (extra points sort by age ) [{‘name’: ‘john’, ‘age’:25},{‘name’:’ram’, ‘age’:20}] = [‘john’, ‘ram’]

//Expected input type : Array with objects in it.

var arr = [ 
  {
    'name' : 'AKHIL',
    'age'  : 22
  },
  {
    'name' : 'RAJ',
    'age'  : 24
  },
  {
    'name' : 'BELDARI',
    'age'  : 28
  }
];
//Tried with different inputs like  {"Akhil" : 123},123,"AKhil",["akhi",123],true...

//This function is to retrieve the names from the array object...
const namesObj = (arr) =>{

var names = [];
var len = arr.length;

for(var i=0; i<len; i++)
if(i < len-1)
names += arr[i].name + ",";
else
names += arr[i].name;

var names = names.split(",").sort();
return names;

}

const namesObject = (arr) => {
return ( (Array.isArray(arr)) ? namesObj(arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = namesObject(arr) ;

console.log("The list of names in the given array object are " );
for(var x in res)
  console.log(res);

//Expected output when the Given array object is The list of names in the given array object are AKHIL,BELDARI,RAJ.

//Expected output when the Given input is 123 The list of names in the given array object are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} The list of names in the given array object are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] The list of names in the given array object are undefined,undefined

//Expected output when the Given input is true The list of names in the given array object are Failed to Execute because of Wrongly Entered Input