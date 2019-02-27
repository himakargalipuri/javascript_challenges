//25.Get current date time and convert it intoToday is 18 February 2019. Its 4 hours 15 minutes and 13 seconds now
const dates=()=>{
var arr=["January","February","March","April","May","June","July","Augest","September","October","November","December"]
var dateo = new Date();
var date=dateo.getDate();
var month=dateo.getMonth();
var year=dateo.getFullYear();
var hours=dateo.getHours();
var minutes=dateo.getMinutes();
var seconds=dateo.getSeconds();
console.log("Today is" + " " + date + " " + arr[month] + " " + year +"." +"Its" + " " + hours + " "+"hours " + minutes +" "+ "minutes "+"and"+" " + seconds+" "+ "seconds"+" now");
}
var res=dates();

//conclusion
//Expected output for the given input is Today is February 2019.Its 14 hours 38 minutes and 45 seconds now