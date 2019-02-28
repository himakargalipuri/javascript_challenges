//4.Sort an array of strings based on
//●Length
//●Length of vowels 
//●Alphabetical

var arr=["hloo","aioo","tow"];
var arr1=[];
const len=()=>{
  sortbylength();
  sortbyvowels();
  sortbyalpha();
 function  sortbylength(){
      console.log("based on length the new array is");
      console.log(arr.sort(function(a,b){return a.length - b.length;}));}//sort by length
  function sortbyvowels(){
       console.log("based on vowels");
        console.log(arr.sort((a,b)=>
               ( a.match(/[aeiou]/ig).length - b.match(/[aeiou]/ig).length)));}//sort by vowels
   function sortbyalpha(){
       console.log("based on alphabetical order the array is");
       console.log(arr.sort());
   }//sort by alphabetical order
}

const leng=()=>{
  return((Array.isArray(arr))?len():console.log("Expected array.got something else"));
};
var res=leng();

//conclusion
//Expected output for the given input ["hloo","aioo","tow"] is based on length the new array is                                                                     ['tow','hloo','aioo']
//                                                             based on vowels
//                                                             ['tow','hloo','aioo']
//                                                           based on alphabetical order the array is
//                                                             ['aioo','hloo','tow']
//input other than array the output will be Expected array.got something else