//Sort an array of strings based on 
//● Length
//● Length of vowels (hard)
//● Alphabetical

//Expected input type : Array with Strings in it.

var arr = ["akhil","asd","raj","challenges","javaScript"];
//Tried with different inputs like  123,{"Akhil" : 123},["akhi","Akhilraj"],true...

//This function is to make every 4th char as 4 the given string...
const stngarray = (arr) =>{

//This function is to sort given array of strings by Length.
const sortByLength = (arr) =>{
	var arr1 = arr.sort(function(a,b){return a.length - b.length });
  console.log("Array sorted by Length of the elements is " + arr1);
}
  
//This function is to sort given array of strings by Length of vowels.
const sortByVowelsLen = (arr) => { //Facing Problem here to sort the given array based on vowel length
  
  for(var i = 0; i < arr.length; i++)
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
      console.log("Length of the Vowels in " + (arr[i]) + "th string is " + Vcount);
    }
  // console.log("Array sorted by Length of the Vowels in the string is " + arr2);
}
  //This function is to sort given array of strings in Alphabetical order.
  const sortByAlpha = (arr) =>{
    var arr2 = arr.sort();
    console.log("Array sorted by Alphabetical order of the elements is " + arr2);
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

//Expected output when the Given Array with Strings is Array sorted by Length of the elements is asd,raj,akhil,avaScript,challenges 
//Array sorted by Alphabetical order of the elements is akhil,asd,avaScript,challenges,raj

//Expected output when the Given input is 123 Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input