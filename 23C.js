//Given annual salary numbers, calculate income tax rate and income tax amount Explore income tax slabs
//Expected input type : Number (Income amount.)

var income = 300000;
//Tried with different inputs like "akhil",{"Akhil" : 123},["akhi",123], true...

//This loop Calculates the Tax rate
const calculate_rate = (income,tax) => {
  var rate = 0;
    if(income < 250000)
    {
      rate = "nill";
    }
    else if(income > 250001 && income < 500000){
      rate = ( (tax/(income - 250000))*100 );
    }
    else if(income > 500001 && income < 1000000){
      rate = ( (tax/(income - 500000))*100);  
    }
    else{
        rate = ( (tax/(income - 1000000))*100);
    }
     return rate;
}

//This loop Calculates the Tax Amount
  const calcTaxes = (income) => {
    var tax = 0;
    if(income < 250000)
    {
      tax = "nill";
    }
    else if(income > 250001 && income < 500000){
      tax = ( (income - 250000)*5/100 );
    }
    else if(income > 500001 && income < 1000000){
      tax = ( ((income - 500000)*20/100) + 12500 );  
    }
    else{
        tax = ( ((income - 1000000)*30/100) + 112500 );
    }
     return tax;
}
  
  
const Taxrate = (income,tax) => {
  return ( (typeof income == 'number') && (typeof tax == 'number') ? calculate_rate(income,tax) : "Failed to Execute because of Wrongly Entered Input"); 
};

const Taxamount = (income) => {
  return ((typeof income == 'number') ? calcTaxes(income) : "Failed to Execute because of Wrongly Entered Input"); 
};

//Calling the Tax Amount Calculating Fucnction and the tax rate calculating function here
var amnt = Taxamount(income) ;
var rte = Taxrate(income,amnt) ;

console.log("The Income Tax amount for Given Income " + income + " is " +  amnt);
console.log("The Income Tax rate for Given Income " + income + " is " +  rte + "%.");

//Expected output when the income is given 300000 is The The Income Tax amount for Given Income 300000 is 2500 The Income Tax rate for Given Income 300000 is 5%.

//Expected output when the income is given boolen is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given "akhil" is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given {"Akhil" : 123} is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input

//Expected output when the income is given ["akhi",123]  is The Income Tax amount for Given Income true is Failed to Execute because of Wrongly Entered Input