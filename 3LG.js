//Find length of a given number without converting it to string.
//Expected input type : number.

var num = 123123123786786786;
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This function is to length of the given Number...
const numLen = (num) =>{
  var temp = num;
  
  var count = 0;        
        while(temp > 1)
         {
           count++; 
           temp = temp / 10;  
          }
  return count;
}

const LenNum = (num) => {
  return ( (typeof num == 'number') ? numLen(num) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = LenNum(num) ;

//Printing the result here
console.log("Length of Given Number " + num +" is " + res);
 

//Expected output when the Given number is Length of Given Number 123123123786786780 is 18

//Expected output when the Given input is 123 The Resulting String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Length of Given Number [object Object] is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Length of Given Number akhi,123 is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true The Resulting String is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Length of Given Number true is Failed to Execute because of Wrongly Entered Input