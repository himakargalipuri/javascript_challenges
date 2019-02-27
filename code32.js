//32.{create class, return addition, multiplication, exponential of a given number}
var a=5;
var b=2;
class numbers{
addition(){
  var sum;
sum=a+b;
console.log("addition" + " "+ sum);
}
multi(){
  var mul;
mul=a*b;
console.log("multiplication" + " "+ mul);
}
exp(){
  var ex;
ex=a**b;
console.log("Exponential" + " "+ ex);
}
} 

var object=new numbers(a,b);//create an object
 object.addition();
object.multi();
object.exp();


//conclusion
//Expected output for the given inputs 5,2=>addition 7 multiplication 10 Exponential 25
