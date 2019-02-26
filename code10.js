//10.Replace vowels from a given string with corresponding numbers
//aeiou=12345
//Ex:decoration=d2c4r1t34n
var str="decoration";
const vowels=(str) => {
console.log(str.split('a').join(1).split('e').join(2).split('i').join(3).split('o').join(4).split('u').join(5));}//here split method can split string into array of strings and join method  joins the elements of an array into string.here a can replaced by 1.
if(str== " ")
    console.log("Enter input");
    else if(!(typeof str=='string'))
    console.log("Expected array.got something else");
    else {
      var res=vowels(arr);
    }

    //conclusion
//checked with different inputs like 123,[2,2,2],boolean values,string.
//input is string like decoration  => output is d2c4r1t34n
//input is like other than string => output is "Expected array.got something else"

