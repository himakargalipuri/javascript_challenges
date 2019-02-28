//21.Capitalise every alternative letter from a given string, ignore spaces
var str ="This is a fourth character" ;
  str1=[];
var arr =str.split("");
var t=0;
const rep=()=>{
for(var i in arr){
  if(arr[i]!=' ')
  {
    if(t==0){
      arr[i]=arr[i].toUpperCase();//to change into uppercase
      t=1;
    }else if(t==1)
    t=0;
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
//Expected output for the given input ("this is a fourth character") is ThIs Is A fOuRtH cHaRaCtEr
//the input other than string gives output as Expected array.got something else