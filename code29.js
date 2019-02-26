//29.Return the index of all capital letters
var str = "ApArnA";
const capital=(str) => {
var index = [];
for(var i=0; i<str.length; i++){
    if(str[i].match(/[A-Z]/) != null){
        index.push(i);
    }
}
console.log(index);
}
const strr=(str) => {
    return((typeof string=='string') ? capital(str) : "Expected array.got something else");
};
        
     var res = strr(str);
    

    //conclusion
//checked with different inputs like 123,[2,2,2],boolean values,string.
//input is string like ApArnA  => output is [0,2,5]
//input is like other than string => output is "Expected array.got something else"


