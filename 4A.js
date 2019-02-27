//Sort an array of strings based on Length, Length of vowels, Alphabetical.
//● Length
//● Length of vowels (hard)
//● Alphabetical

//Expected input type : Array with Strings in it.

var arr = ["akhilee","asp","raji","ceehalleinges","javaScript"];
//Tried with different inputs like  123,{"Akhil" : 123},["akhi","Akhilraj"],true...

//This function is to make every 4th char as 4 the given string...
const stngarray = (arr) =>{

//This function is to sort given array of strings by Length.
const sortByLength = (arr) =>{
	var arr1 = arr.sort(function(a,b){return a.length - b.length });
  console.log("Array sorted by Length of the elements is ");
  console.log(arr1);
}
  
//This function is to sort given array of strings by Length of vowels.
const sortByVowelsLen = (arr) => { 

var len = arr.length;
var obj = {};
var kys = [];
for(var i = 0; i < len; i++)
    { 
      let Vcount = 0;
      for(var j = 0; j < arr[i].length; j++)
        {
          ch = arr[i].charAt(j);
          // console.log(arr[i]);
          if(ch.match(/[aeiou]/i))
          {
              Vcount++;
          }
        }
      
      obj[arr[i]] = Vcount;  
    }
  
  // console.log(obj);
  // console.log(Object.keys(obj));
  
  for(var key in obj)
    kys.push(obj[key]);
  
    kys.sort();
  // console.log(kys);
  
  let mainObj={}
  for(var x in kys)
    for(var y in obj){
      if(obj[y]=== kys[x]){
        mainObj[y]=kys[x];
         delete obj[y];
      }
    }
  console.log("Array sorted by Length of vowels is ")
  console.log(Object.keys(mainObj));
  
  //var arr2 = arr.sort( (a,b) =>(a.match(/[aeiou]/i).length - b.match(/[aeiou]/i).length));
  //console.log("Array sorted by Length of the vowels is " + arr2 );
}

//This function is to sort given array of strings in Alphabetical order.
  const sortByAlpha = (arr) =>{
    var arr3 = arr.sort();
    console.log("Array sorted by Alphabetical order of the elements is ")
    console.log(arr3);
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

//Expected output when the Given Array with Strings is Array sorted by Length of the elements is ["asp", "raji", "akhilee", "javaScript", "ceehalleinges"]... Array sorted by Length of vowels is  ["asp", "raji", "javaScript", "akhilee", "ceehalleinges"]... Array sorted by Alphabetical order of the elements is ["akhilee", "asp", "ceehalleinges", "javaScript", "raji"]...

//Array sorted by Alphabetical order of the elements is akhil,asd,avaScript,challenges,raj

//Expected output when the Given input is 123 Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input