//26. Return 7 days from now date as well as 2 day ago date from now
var x=7; 
var n=2;
const dates=()=>{
  console.log("before 7 days");
console.log(new Date(new Date().setDate(new Date().getDate() - x)));//return x days from now date
console.log("after 2 days");
console.log(new Date(new Date().setDate(new Date().getDate() + n)));//return n day ago date from now
}
const neo=()=>{
  return(((typeof x=='number')&&(typeof n=='number'))?dates():console.log("Expected array.got something else"));
}
var res=neo();

//conclusion
//Expected output for the given input is before 7 days wed 20 february 2019 09:47:32(IST)
//                                       after 2 days fri 01 march 2019  09:47:32(IST)
//the input is other than number the output will be Expected array.got something else      