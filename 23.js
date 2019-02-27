// 23. Given annual salary numbers, calculate income tax rate and income tax 
// amount for Individuals below 60 years

//aSal = Annual Salary, tr = Tax Rate, ita = Income Tax Amount in INR, itr = Income Tax Rate
var aSal = 1200000, ita=0, itr=0;
const myITSlabs = () => {
    if(aSal <= 250000){
        ita = 0 * aSal; 
        itr = (ita * 100)/aSal
    }
    else if(aSal >= 250000 && aSal <= 500000){
        ita = (5/100) * aSal; 
        itr = (ita * 100)/aSal
    }
    else if(aSal >= 500000 && aSal <= 1000000){
        ita = (20/100) * aSal; 
        itr = (ita * 100)/aSal
    }
    else{
        ita = (30/100) * aSal; 
        itr = (ita * 100)/aSal
    }
    console.log("Annual Salary: ", aSal +" INR");
    console.log("Income Tax Amount: ", ita +" INR");
    console.log("Income Tax Rate:   " + itr + "%");
}

//checking various inputs
const init = () =>{
    ((aSal == "") || !(typeof aSal == 'number')) ? console.log("Expected Number, Got something else") : myITSlabs();
}

init()

  //conclusion: 
  // Checked with -1200000, 150000, 300000, 700000, 1200000, "150000", [120000] true/false,  {"a": 5000, "b": 1200000, "c": 700000} 
  
  //Input: -1200000    => Output: Income Tax Amount: 0 INR
  //                              Income Tax Rate: 0%

  //Input: 150000      => Output: Income Tax Amount: 0 INR
  //                              Income Tax Rate: 0%

  //Input: 300000      => Output: Income Tax Amount: 15000 INR
  //                              Income Tax Rate: 5%

  //Input: 700000      => Output: Income Tax Amount: 140000 INR
  //                              Income Tax Rate: 20%

  //Input: 300000      => Output: Income Tax Amount: 360000 INR
  //                              Income Tax Rate: 30%

  //Input: other than Number      => Output: Expected Number, Got something else
  