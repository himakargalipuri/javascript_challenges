//Sort an array of strings based on 
//● Length
//● Length of vowels (hard)
//● Alphabetical

//Expected input type : Array with Strings in it.

var arr = ["akhilee","asapu","rajii","ceehalleinges","javaScript"];
//Tried with different inputs like  123,{"Akhil" : 123},["akhi","Akhilraj"],true...

//This function is to make every 4th char as 4 the given string...
const stngarray = (arr) =>{

//This function is to sort given array of strings by Length.
const sortByLength = (arr) =>{
	var arr1 = arr.sort(function(a,b){return a.length - b.length });
  console.log("Array sorted by Length of the elements is " + arr1);
}
  
//This function is to sort given array of strings by Length of vowels.
const sortByVowelsLen = (arr) => { 
  var arr2 = arr.sort( (a,b) =>(a.match(/[aeiou]/i).length - b.match(/[aeiou]/i).length));
  console.log("Array sorted by Length of the vowels is " + arr2 );
}
  
//This function is to sort given array of strings in Alphabetical order.
  const sortByAlpha = (arr) =>{
    var arr3 = arr.sort();
    console.log("Array sorted by Alphabetical order of the elements is " + arr3);
  }
  
  sortByLength(arr);
  sortByVowelsLen(arr);
  sortByAlpha(arr);
}

const stngArray = (arr) => {
  return ( (Array.isArray(arr)) ? stngarray(arr) : console.log("Failed to Execute because of Wrongly Entered Input")); 
};

//Calling the function here
stngArray(arr) ;

//Expected output when the Given Array with Strings is Array sorted by Length of the elements is asapu,rajii,akhilee,javaScript,ceehalleinges...  Array sorted by Length of the vowels is asapu,rajii,akhilee,javaScript,ceehalleinges...  Array sorted by Alphabetical order of the elements is akhilee,asapu,ceehalleinges,javaScript,rajii...

//Expected output when the Given input is 123 Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input