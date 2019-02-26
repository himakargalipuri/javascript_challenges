//Return if given number is prime
//Expected input type : number. 
var num = 97;
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This function is to check the given number is Prime or not...
const isPrime = (num) =>{

  //console.log(num)
  var flag = 0; 
    for(let i = 2; i <= num/2; ++i)
    {
        if( num % i == 0)
        {
            flag = 1;
            break;
        }
    }

    if (num == 1)
    {
      console.log("1 is neither Prime nor Composite number")
    }else 
     {
       if (flag == 0){
       console.log("It is a Prime number")
       }else{
       console.log("It is a Not Prime number")
       }
     }
}

const IsPrime = (num) => {
  return ( (typeof num == 'number') ? isPrime(num) : console.log("Failed to Execute because of Wrongly Entered Input") ); 
};

//Calling the function here
IsPrime(num) ;

//Expected output when the Given number is It is a Prime number.

//Expected output when the Given input is "akhil" Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input