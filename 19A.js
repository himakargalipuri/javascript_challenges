//Given an array of objects with names and ages. Return Segregated names in an array (extra points sort by age ) [{‘name’: ‘john’, ‘age’:25},{‘name’:’ram’, ‘age’:20}] = [‘john’, ‘ram’]

//Expected input type : Array with objects in it.

var arr = [ 
  {
    'name' : 'RAJ',
    'age'  : 28
  },
  {
    'name' : 'AKHIL',
    'age'  : 24
  },
  {
    'name' : 'BELDARI',
    'age'  : 22
  },
  {
    'name' : 'None',
    'age'  : 5
  }
];

var arr = arr.sort( (a,b) => {return a.age - b.age} );
//Tried with different inputs like  {"Akhil" : 123},123,"AKhil",["akhi",123],true...

//This function is to retrieve the names from the array object...
const namesObj = (arr) =>{

var names = [];
var len = arr.length;

for(var i=0; i<len; i++){
if(i < len-1)
names.push(arr[i].name);
else
names.push(arr[i].name);
}
return names;
}

const namesObject = (arr) => {
return ( (Array.isArray(arr)) ? namesObj(arr) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = namesObject(arr) ;

console.log("The list of names in the given array object sorted by ages are " );
console.log(res);

//Expected output when the Given array object is The list of names in the given array object sorted by ages are ["None", "BELDARI", "AKHIL", "RAJ"]

//Expected output when the Given input is 123 The list of names in the given array object are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} The list of names in the given array object are Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] The list of names in the given array object are undefined,undefined

//Expected output when the Given input is true The list of names in the given array object are Failed to Execute because of Wrongly Entered Input