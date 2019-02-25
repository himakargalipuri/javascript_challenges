//Merge two arrays/objects
//Expected input type : Array and object (Enter the Array and Objects)

var income = 10000;
//Tried with different inputs like "akhil",{"Akhil" : 123},["akhi",123], true...
const Taxrate = (amnt) => {
  return ( (typeof income == 'number') ? calculate_tax(amnt) : "Failed to Execute because of Wrongly Entered Input"); 
};

const Taxamount = (income) => {
  return ((typeof income == 'number') ? calcTaxes(income) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the Tax Amount Calculating Fucnction and the tax rate calculating function here
var amnt = Taxamount(income) ;
var rte = Taxrate(amnt) ;

console.log("The Income Tax amount for Given Income " + income + " is " +  amnt);
console.log("The Income Tax rate for Given Income " + income + " is " +  rte);

//This loop Calculates the Tax rate
function calculate_tax(amnt) {
    var rate = (amnt / income) * 100;
  return rate ;
}

//This loop Calculates the Tax Amount
  function calcTaxes(amount){
    var calculate = 0;
    if(amount > 85650){
        tax = (amount - 85650) * .28 + 870.0+ (35350-8700)*.15 + (89350-36900)*.25;
    }
    else if( amount > 35350){
    tax = (amount - 35350) * .25 + 870.0+(35350-8700)*.15;    
    }
    else if(amount > 8700){
    tax = (amount - 8700) * .15 + 870.0;
    }
    else{
       tax = amount * .10;
        }
    tax += amount * .153;
     return tax;
}
//Expected output when the income is given 10000 is The Income Tax amount for Given Income 10000 is 2595 The Income Tax rate for Given Income 10000 is 25.95

//Expected output when the income is given boolen is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given "akhil" is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given {"Akhil" : 123} is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given ["akhi",123]  is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input