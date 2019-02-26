//Nearest prime number of a given number.
//Expected input type : number.

var input = 6;
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This function is to Check the nearest Prime...
const Prime = (input) =>{
  var left = 0;
  var right = 0;
  var i;
  var j;
  for( i = input - 1; i > 1; i--)
    { 
     left++;
      if(isprime(i))
        { 
          break;
        } 
    }
  for( j = input + 1; j < (2*input); j++)
    { 
     right++;
      if(isprime(j))
       {
          break;
        } 
    }
  
  if( left == right)
    {
     return i;
    }
  else if(left < right)
  {
    return i;
  }
 else
   {
     return j;
   }
}

//This function is to Check the given number is Prime or not...
const isprime = (n) =>{ 
    var flag = 0;
    for(let i = 2; i <= n/2; ++i)
    {
        if(n%i == 0)
        {
            flag = 1;
            break;
        }
    }

    if (n > 1)
    {
        if (flag == 0)
          {
            return true;
          }
        else
          {
            return false;
          }
     }  else{
       console.log("Not Prime")
     }
   }

const Primecheck = (input) => {
  return ( (typeof input == 'number') ? Prime(input) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the function here
var res = Primecheck(input) ;

//Print the result
console.log("Nearest Prime Number of " + input + " is " + res);

//Expected output when Given 6 as input is Nearest Prime Number of 6 is 5.

//Expected output when the Given input is "Akhil" Nearest Prime Number of "Akhil" is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Nearest Prime Number of {"Akhil" : 123} is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Nearest Prime Number of ["akhi",123] is Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Nearest Prime Number of true is Failed to Execute because of Wrongly Entered Input
