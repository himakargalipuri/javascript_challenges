//Given a number of 10 digits (0000000000) convert it “+1 (000) 000-0000” format
//Expected input type : number. (Make Sure you give a Ten digit number)
  
var num = 1000000000;
//Tried with different inputs like  1000000,"Akhil",{"Akhil" : 123},["akhi",123],true...

//This function is to check the given input has 10digits and to convert into required format...
const format = (num) =>{
  var a = num.toString().split("");
  if(a.length < 10)
    {
      console.log("Failed to Execute because of Wrongly Entered Input");
    }
  else
  console.log("+1" + " " + "(" + a[0]+a[1]+a[2] + ")" + " " + a[3]+a[4]+a[5] + "-" + a[6]+a[7]+a[8]+a[9])
 }

const frmt = (num) => {
  return ( (typeof num == 'number') ? format(num) : console.log("Failed to Execute because of Wrongly Entered Input") ); 
};

//Calling the function here
frmt(num) ;

//Expected output when the Given number 1000000000 is +1 (100) 000-0000

//Expected output when the Given number 10000000 is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is "Akhil" Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input