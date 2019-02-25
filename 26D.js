//Return 7 days from now date as well as 2 day ago date from now
//Expected input type : number (Enter the number of days to be forwarded from now)
var newDays = 7;
var oldDays = 2;
//Tried with different inputs like "akhil",{"Akhil" : 123},["akhi",123],...
const newModDate = (newDays,oldDays) => {
return (typeof newDays == 'number')  ? newDate(newDays) : "Failed to Execute because of Wrongly Entered Input";
    
};

const oldModDate = (oldDays) => {
return ((typeof oldDays == 'number') ) ? agoDate(oldDays) : "Failed to Execute because of Wrongly Entered Input";
    
};

//Calling the 7 days after date function here
var newres = newModDate(newDays);

console.log("Date after 7 Days is " + newres);

//Calling the2 days ago date function here
var oldres = oldModDate(oldDays);

console.log("Date 2 Days Ago was " + oldres);

//Expected output for given input is Date after 7 Days is Mon Mar 04 2019 19:10:14 GMT+0530 (India Standard Time).

function newDate(newDays){
  
var date = new Date();
  
//Calculating the 7 days after date here
var ndate = date.setTime(date.getTime() + (newDays * 24 * 60 * 60 * 1000));
console.log("Today date is " + Date());
date = new Date(ndate);
return date;
}

function agoDate(oldDays){ 
var date = new Date();
  //Calculating the 2 days ago date here
var odate = date - 1000 * 60 * 60 * 24 * oldDays;   
  // current date's milliseconds - 1,000 ms * 60 s * 60 mins * 24 hrs * (# of days beyond one to go back)

console.log("Today date is " + Date());
date = new Date(odate);
return date;
}

//Expected Output for the given input 7 is  Today date is Mon Feb 25 2019 19:40:38 GMT+0530 (India Standard Time) Date after 7 Days is Mon Mar 04 2019 19:40:38 GMT+0530 (India Standard Time)

//Expected Output for the given input "akhil" is Date after 7 Days is Failed to Execute because of Wrongly Entered Input

//Expected Output for the given input {"Akhil" : 123} is Date after 7 Days is Failed to Execute because of Wrongly Entered Input

//Expected Output for the given input ["akhi",123]  is Date 2 Days Ago was Failed to Execute because of Wrongly Entered Input


