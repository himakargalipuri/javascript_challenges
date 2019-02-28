// 32. Create class, return addition, multiplication, exponential of a given number 
// Var number = new numClass(4) 
// number.add(), number.multi(), number.exp()

var n1 = 10, n2 = 2;

const mathOp = (a, b) => {  
    class numClass{     //creating class 
      constructor(a,b){     //assigning values to class variables using constructor
        this.a = a;
        this.b = b;
      }
      add(){ return this.a + this.b }
      multi(){ return this.a * this.b }
      exp(){ return Math.pow(this.a, this.b) }       
    } 

    var number = new numClass(n1, n2);
    console.log("Addition: " + number.add() + "\n" +
    "Multiplication: " + number.multi() + "\n" +
    "Exponential: " + number.exp());
}


const check = (n1, n2) => {    //checking various inputs types
  ((isNaN(n1)) || (n1 == Infinity) || (n1 == -Infinity) || (isNaN(n2)) || (n2 == Infinity) || (n2 == -Infinity)) ? 
    console.log("Please enter numbers other than NaN, +Infinity, -Infinity") : 
    mathOp(n1, n2);
}

//checking various inputs
const  init = () => {
  !(typeof n1 == 'number') || !(typeof n2 == 'number') ? console.log("Expected Number as input, Got something else") : check(n1, n2);
}
init();
     
//Conclusion: 
// Checked with n1 = 10 n2 = 2, n1 = "10" n2 = 2,  n1 = "10" n2 = "2",
//              n1 = true n2= false,  {"n1": "5", "n2": "6"}, null, undefined, "", NaN, Infinity, -Infinity  
  
// Input: n1 = 10, n2 = 2       
// => Output: Addition: 12
//            Multiplication: 20
//            Exponential: 100
//Input: n1 or n2 = NaN or Infinity or -Infinity   => Output: Please enter numbers other than NaN, +Infinity, -Infinity
// Input: other than n1 = Number and n2 = Number   => Output: Expected Numbers as input, Got something else




/* IF INPUT IS ONLY ONE NUMBER
var n1 = 10;

const mathOp = (a) => {  
    class numClass{     //crating class 
      constructor(a){
        this.a = a;
      }
      add(){ return this.a + this.a }
      multi(){ return this.a * this.a }
      exp(){ return Math.pow(this.a, this.a) }       
    } 
    var number = new numClass(n1);
    console.log("Addition: " + number.add() + "\n" +
    "Multiplication: " + number.multi() + "\n" +
    "Exponential: " + number.exp());
}
const  init = () => {
    (n1 == "" || !(typeof n1 == 'number') ) ?
     console.log("Expected Number as input, Got something else") : mathOp(n1);
    //checking the input value
}
init();
    
//Conclusion: 
// Checked with n1 = 10 , n1 = "10" ,
//              n1 = true/false,  {"n1": "5"} 
  
// Input: n1 = 10      
// => Output: Addition: 20
//            Multiplication: 100
//            Exponential: 10000000000
// 
// Input: other than n1 = Number 
// => Output: Expected Number as input, Got something else
*/