//4. Sort an array of strings based on 
// ● Length 
// ● Length of vowels
// ● Alphabetical

var arr = ["ram", "BC", "12", "10","HK", "Abc", "aeiou", "john", "hi", "aei", "ai", "hk", "bhk"]

function sortByLength(arr){
  return arr.sort((a,b) => (a.length - b.length));
}

function sortByVowel(arr){
  var varr = [], cons = []   //varr = vowels Array, cons = consonants Array
  arr.filter(x => { 
    (x.match(/[aeiouAEIOU]/ig)) ? varr.push(x) : cons.push(x)  //storing vowels and consonants in respective arrays
  })
  return cons.sort().concat(varr.sort( (a,b) =>(a.match(/[aeiouAEIOU]/ig).length - b.match(/[aeiouAEIOU]/ig).length)));
  //checking the length of vowels in varr[] and sorting by their length. Concatinating nvarr[] with cons[] and returning the reult
}

function sortByAlphabetical(arr){
  return arr.sort()
}

const sortArray = (arr) => {
  console.log("Sorted by Length:              " + sortByLength(arr).join().replace(/,/g, ", "));
  console.log("Sorted by Length of Vowels:    " + sortByVowel(arr).join().replace(/,/g, ", "));
  console.log("Sorted by Alphabetical Order:  " + sortByAlphabetical(arr).join().replace(/,/g, ", "));
}

const checkString = (arr)=> {
    for (let i in arr){ //checking if array of Strings or not
        return !(arr[i] instanceof String) ? sortArray(arr) : console.log(("Please enter an array of Strings"));
    }
}
const  init = () => {
    //checking the input value
    !(arr instanceof Array) ? console.log("Expected Array, Got something else") : checkString(arr);
}

init();

     
//Conclusion: 
// Checked with ["ram", "BC", "12", "10", "HK", "Abc", "aeiou", "john", "hi", "aei", "ai", "hk", "bhk"] , 
//              "ram,aeio,john",  [1234], true/false,  {"a": "5", "b": "6", "c": "8"}, null, undefined, "", Infinity, -Infinity, NaN 
  
// Input: ["ram", "BC", "12", "10", "HK", "Abc", "aeiou", "john", "hi", "aei", "ai", "hk", "bhk"]      
// => Output: 
//  Sorted by Length:              12, 10, HK, BC, hk, hi, ai, ram, bhk, aei, Abc, john, aeiou
//  Sorted by Length of Vowels:    10, 12, BC, HK, bhk, hk, hi, ram, Abc, john, ai, aei, aeiou
//  Sorted by Alphabetical Order:  10, 12, Abc, BC, HK, aei, aeiou, ai, bhk, hi, hk, john, ram

//Input: other than array                   => Output: Expected Array, Got something else
//Input: Array elements other than string   => Output: Please enter an array of Strings
  