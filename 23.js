// 23. Given annual salary numbers, calculate income tax rate and income tax amount for Individuals below 60 years
//aSal = Annual Salary, tr = Tax Rate, ita = Income Tax Amount in INR, itr = Income Tax Rate

var aSal = 1200000, ita=0, itr=0;
const myITSlabs = (aSal) => {
    var r = 0;
    if(aSal<0) {
        return "Please enter positive Annual Salary"
    }
    //Assigning Rate of Interest based on Annual Salary
    if(aSal <= 250000){ r = 0; }
    else if(aSal >= 250000 && aSal <= 500000){ r = 5/100 }
    else if(aSal >= 500000 && aSal <= 1000000){ r = 20/100 }
    else{ r = (30/100) }

    ita = r * aSal; 
    itr = (ita * 100)/aSal
    return "Annual Salary: "+ aSal +" INR" + "\nIncome Tax Amount: " + ita +" INR\nIncome Tax Rate:   " + itr + "%"
}


const check = (aSal) => {
    (isNaN(aSal) || (aSal == Infinity) || (aSal == -Infinity)) ? console.log("Please enter number other than NaN, +Infinity, -Infinity") : console.log(myITSlabs(aSal));
  }
  
  //checking various inputs
  const  init = () => {
    !(typeof aSal == 'number') ? console.log("Expected Number as input, Got something else") : check(aSal);
  }
  init();


  //conclusion: 
  // Checked with -1200000, 150000, 300000, 700000, 1200000, 3000000 "150000", [120000] true/false,  
  //                 {"a": 5000, "b": 1200000, "c": 700000}, null, undefined, "", NaN, Infinity, -Infinity 
  
  //Input: -1200000    => Output: Please enter positive Annual Salary

  //Input: 150000      => Output: Income Tax Amount: 0 INR
  //                              Income Tax Rate: 0%

  //Input: 300000      => Output: Income Tax Amount: 15000 INR
  //                              Income Tax Rate: 5%

  //Input: 700000      => Output: Income Tax Amount: 140000 INR
  //                              Income Tax Rate: 20%

  //Input: 1200000     => Output: Income Tax Amount: 360000 INR
  //                              Income Tax Rate: 30%

  //Input: NaN or Infinity or -Infinity   => Output: Please enter number other than NaN, +Infinity, -Infinity
  //Input: other than Number              => Output: Expected Number as input, Got something else
  