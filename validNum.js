var num = "234";

var n = Number(num);

if( (typeof n == "number") && !(isNaN(n)) && num != " " && num != null && num != undefined && num != true && num != false) 
console.log(num + " is a Number."); 
// Output is Number for "234"

else
console.error( num + " is not a Valid Number.");
//Output is Not a Number for "234a" or "abc"
//undefined,true,false,null,""," " is Not a Number