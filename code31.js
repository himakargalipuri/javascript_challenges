//31.Change every 4th character of a string to number 4
//“This is a fourth character” = “thi4 is a 4our4h ch4rac4er”
  
var str ="This is a fourth character" ;
  str1=[];
var arr =str.split("");
var t=0;
const rep=()=>{
for(var i in arr){
  if(arr[i]!=' ')
  {
    t++;
    if(t==4){
     arr[i] = 4;
     t=0;
     }
    }
  }
str1=arr.join(" ");
console.log(str1);
}
const replace=()=>{
  return((typeof str=="string")?rep():console.log("Expected array.got something else"));
}
var res=replace();

//conclusion
//Expected output for the given input ("This is a fourth character") is thi4 is a 4our4h ch4rac4er
//the input other than string gives output as Expected array.got something else