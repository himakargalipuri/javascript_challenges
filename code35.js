//35.convert celsius data to fahrenheit
var celsius=30;
  var fahrenheit;
const convertToF=(celsius)=> {
  fahrenheit = (celsius * (9/5)) + 32; 
  console.log(fahrenheit);
}
const convert=(celsius)=>{
  return((typeof celsius =='number')? convertToF(celsius) : console.log("Expected array.got something else"));
};
var res = convert(celsius);

//conclusion
//The Expected output for given input 30 is 86
//The input other than number then the output is Expected array.got something else 