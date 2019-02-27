//Create class, return addition, multiplication, exponential of a given number.
//Expected input type : Number. (Enter two numbers to perform the operations.)

var m = 2;
var n = 5;
//Tried with different inputs like  123,{"Akhil" : 123},["akhi",123],true...

//This are the classes for arithmettic operations
class arithmeticTasks
{
    
 static add(m,n){
    var sum = m + n;
    return sum;
  }
  static mul(m,n){
     var mul = m * n;
    return mul;    
  }
  static exp(m,n){
    var exp = Math.pow(m,n);
    return exp;  
  }
}
//this is the function calling all the arithmetic tasks
const arithmetic = (m,n) => {
  
  var add = arithmeticTasks.add(m,n);
  var mul = arithmeticTasks.mul(m,n);
  var exp = arithmeticTasks.exp(m,n);
  console.log("Addition of given numbers " + m + "," + n + " is " + add);
  console.log("Multiplication of given numbers " + m + "," + n + " is " + mul);
  console.log("Exponential of given numbers " + m + "," + n + " is " + exp);
}

const Arithmetic= (str) => {
  return ( (typeof m == 'number') && (typeof n == 'number') ? arithmetic(m,n) : console.log("Failed to Execute because of Wrongly Entered Input") ); 
};

//Calling the function here
Arithmetic(m,n) ;

//Expected output when the Given input 2,5 is "Addition of given numbers 2,5 is 7" "Multiplication of given numbers 2,5 is 10" "Exponential of given numbers 2,5 is 32".

//Expected output when the Given input "AKhil","raj" isAddition of given numbers akhil,raj is akhilraj Multiplication of given numbers akhil,raj is NaN Exponential of given numbers akhil,raj is NaN

//Expected output when the Given input {"Akhil" : 123} is Addition of given numbers [object Object],[object Object] is [object Object][object Object] Multiplication of given numbers [object Object],[object Object] is NaN Exponential of given numbers [object Object],[object Object] is NaN

//Expected output when the Given input ["akhi",123] is Addition of given numbers akhi,123,akhi,123 is akhi,123akhi,123 Multiplication of given numbers akhi,123,akhi,123 is NaN Exponential of given numbers akhi,123,akhi,123 is NaN

//Expected output when the Given input true is TAddition of given numbers true,true is 2 Multiplication of given numbers true,true is 1 Exponential of given numbers true,true is 1

//Expected output when the Given input false is Addition of given numbers false,false is 0 Multiplication of given numbers false,false is 0 Exponential of given numbers false,false is 1