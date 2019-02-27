//4. Sort an array of strings based on 
// ● Length 
// ● Length of vowels
// ● Alphabetical

var arr = ["ram", "aeiou", "john", "hi", "aei", "ai"]

function sortByLength(arr){
  return arr.sort((a,b) => (a.length - b.length));
}

function sortByVowel(arr){
  return arr.sort( (a,b) =>(a.match(/[aeiou]/ig).length - b.match(/[aeiou]/ig).length));
  //matching every item of arr with aeiou and sorting
}

function sortByAlphabetical(arr){
  return arr.sort()
}

const sortArray = (arr) => {
  console.log(sortByLength(arr));
  console.log(sortByVowel(arr));
  console.log(sortByAlphabetical(arr));
}

const checkString = (arr)=> {
    for (let i in arr){ //checking if array of Strings or not
        return !(arr[i] instanceof String) ? sortArray(arr) : console.log(("Please enter an array of Strings"));
    }
}
const  init = () => {
    //checking the input value
    ((arr == "") || !(arr instanceof Array)) ? console.log("Expected Array, Got something else") : checkString(arr);
}

init();

     
//Conclusion: 
// Checked with ["ram", "aeiou", "john", "hi", "aei", "ai"] , "ram,aeio,john",  [1234], true/false,  {"a": "5", "b": "6", "c": "8"} 
  
// Input: ["ram", "aeiou", "john", "hi", "aei", "ai"]      
// => Output: 
//  [ 'hi', 'ai', 'ram', 'aei', 'john', 'aeiou' ]
//  [ 'hi', 'ram', 'john', 'ai', 'aei', 'aeiou' ]
//  [ 'aei', 'aeiou', 'ai', 'hi', 'john', 'ram' ]

//Input: other than array   => Output: Expected Array, Got something else
//Input: Array elements other than string =>Output: Please enter an array of Strings
  