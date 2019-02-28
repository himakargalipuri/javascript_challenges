//23.Given annual salary numbers, calculate income tax rate and income taxamount
var annsal = 9000000; 
var incomeam=0; 
var incomerrate=0;
const salary =()=> {
    if(annsal <= 250000){
      incomeam = 0 * annsal; 
      incomerrate = (incomeam * 100)/annsal 
    }
    else if(annsal>=250000 &&annsal<=500000){
      incomeam = (5/100) * annsal ; //5% rate for between this amount
      incomerrate = (incomeam * 100)/annsal 
    }
    else if(annsal  >= 500000 && annsal  <= 1000000){
      incomeam = (20/100) * annsal ; //20% rate for between this amount
      incomerrate = (incomeam * 100)/annsal 
    }
    else{
      incomeam = (30/100) * annsal ; //30% rate for between this amount
      incomerrate = (incomeam * 100)/annsal 
    }
    
    console.log("Income Tax rate  " ,+ incomerrate );
    console.log("Income Tax amount ", +incomeam );
   
}
const sal=()=>{
  return((typeof annsal=='number')?salary():console.log("Expected array.got something else"));
}
var res=sal();

//conclusion
//checked with different inputs
//Expected output for the given input (annsal=900000)is Income Tax rate 20
//                                                      Income Tax amount 180000
////Expected output for the given input (annsal=900000)is Income Tax rate 0
//                                                      Income Tax amount 0
////Expected output for the given input (annsal=900000)is Income Tax rate 30
//                                                      Income Tax amount 2700000
//input other than number the output is Expected array.got something else