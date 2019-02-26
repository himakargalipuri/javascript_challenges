//Is the given number symmetrical
//Expected input type : number (Enter a number)

var num = 2333223332 ;
//Tried with different inputs like 234332,"akhil",{"Akhil" : 123},["akhi",123], true...

const symetric = (num) => {
  var temp = num;
  var rem = 0;
  var sum = 0;
  while(num>1)
    {
      rem = Math.floor(num%10);
      sum = Math.floor((sum*10) + rem);
      num = Math.floor(num/10);
    }
  return sum; 
}

const symet = (num) => {
  return ( (typeof num == 'number') ? symetric(num) : "Failed to Execute because of Wrongly Entered Input"); 
};

var res = symet(num);

if(isNaN(res))
console.log(res);

else{
if(res == num)
    console.log("Given Number " + num + " is Symmetrical Number");
  else
    console.log("Given Number " + num + " is Not a Symmetrical Number");
}

//Expected output when the income is given 2334332 is Given Number 2334332 is Symmetrical Number

//Expected output when the income is given 234332 is Given Number234332 is Not a Symmetrical Number

//Expected output when the income is given boolen is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given "akhil" is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given {"Akhil" : 123} is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given ["akhi",123]  Failed to Execute because of Wrongly Entered Input