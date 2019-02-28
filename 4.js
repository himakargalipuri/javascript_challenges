//4. Sort an array of strings based on 
// ● Length 
// ● Length of vowels
// ● Alphabetical

var arr = ["ram", "aeiou", "john", "hi", "aei", "ai", "hk", "bhk"]

function sortByLength(arr){
  return arr.sort((a,b) => (a.length - b.length));
}

function sortByVowel(arr){
  var varr = [], cons = []   //varr = vowels Array, cons = consonants Array
  arr.filter(x => { 
    (x.match(/[aeiou]/ig)) ? varr.push(x) : cons.push(x)  //storing vowels and consonants in respective arrays
  })
  return cons.sort().concat(varr.sort( (a,b) =>(a.match(/[aeiou]/ig).length - b.match(/[aeiou]/ig).length)));
  //checking the length of vowels in varr[] and sorting by their length. Concatinating nvarr[] with cons[] and returning the reult
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
// Checked with ["ram", "aeiou", "john", "hi", "aei", "ai", "hk", "bhk"] , "ram,aeio,john",  [1234], true/false, null,  {"a": "5", "b": "6", "c": "8"} 
  
// Input: ["ram", "aeiou", "john", "hi", "aei", "ai", "hk", "bhk"]      
// => Output: 
//  [ 'hi', 'ai', 'hk', 'ram', 'aei', 'bhk', 'john', 'aeiou' ]  By length
//  [ 'bhk', 'hk', 'hi', 'ram', 'john', 'ai', 'aei', 'aeiou' ]  By Length of Vowels
//  [ 'aei', 'aeiou', 'ai', 'bhk', 'hi', 'hk', 'john', 'ram' ]  By Alphabetical

//Input: other than array                   => Output: Expected Array, Got something else
//Input: Array elements other than string   =>Output: Please enter an array of Strings
  