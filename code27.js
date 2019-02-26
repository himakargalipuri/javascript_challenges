//27.Reverse a string
var str="aparna";

var len=str.length;
var str1= [];
const rev=(str)=>{
for (var i = len; i >= 0; i--){
 str1 += str[i];
 }
console.log(str1.split("").splice(9).join(""));//here split can split the string into array of strings
                                               //here splice can remove the 9 elements 
                                               //here join can joins the elements of an array into string.
}
const strr=(str) => {
  return((typeof str=='string') ? rev(str) : "Expected array.got something else");
};
    var res=strr(str);
    

    //conclusion
//checked with different inputs like 123,[2,2,2],boolean values,string.
//input is string like aparna  => output is anrapa
//input is like other than string => output is "Expected array.got something else"


