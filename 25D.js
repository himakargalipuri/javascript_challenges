//Get current date time and convert it into Today is 18 February 2019. Its 4 hours 15 minutes and 13 seconds now
//Expected input type : calling the default functions...

const PrntDate = () => {
  return (true)  ? currentDate() : "Failed to Execute because of Wrongly Entered Input";
      
  };
  
  PrntDate();
  
  function currentDate()
  {
  var dateData = new Date();
  var date = dateData.getDate();
  var month = dateData.getMonth();
  var year = dateData.getFullYear();
  var hours = dateData.getHours();
  var minutes = dateData.getMinutes();
  var seconds = dateData.getSeconds();
  
  switch(month)
  {
    case 0 : month = "January";
          break;
    case 1 : month = "Feburary";
          break;
    case 2 : month = "March";
          break;
    case 3 : month = "April";
          break;
    case 4 : month = "may";
          break;
    case 5 : month = "June";
          break;
    case 6 : month = "July";
          break;
    case 7 : month = "August";
          break;
    case 8 : month = "September";
          break;
    case 9 : month = "October";
          break;
    case 10 : month = "November";
          break;
    case 11 : month = "December";
          break;
  }
  console.log("Today is " + date + " " + month + " " + year + " " + ". Its " + hours + " hours " + minutes + " minutes and " + seconds + " seconds now");
  }
  //Expected Output for the given input calling function PrntDate is Today is 25 Feburary 2019 . Its 19 hours 52 minutes and 52 seconds now