//Get current date time and convert it into Today is 18 February 2019. Its 4 hours 15 minutes and 13 seconds now
//Expected input type : calling the default functions...

const currentDate = () => {
  var dateData = new Date();
  var date = dateData.getDate();
  var month = dateData.getMonth();
  var year = dateData.getFullYear();
  var hours = dateData.getHours();
  var minutes = dateData.getMinutes();
  var seconds = dateData.getSeconds();
  
  var arr = ["January","Feburary","March","April","may","June","July","August","September","October","November","December"];
  
  console.log("Today is " + date + " " + arr[month] + " " + year + " " + ". Its " + hours + " hours " + minutes + " minutes and " + seconds + " seconds now");
 }

const PrntDate = () => {
  return (true)  ? currentDate() : console.log("Failed to Execute because of Wrongly Entered Input");
 };
  
PrntDate();
  
  //Expected Output for the given input calling function PrntDate is Today is 25 Feburary 2019 . Its 19 hours 52 minutes and 52 seconds now