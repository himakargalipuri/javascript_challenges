//34.print the contents of the current window

const printsc=()=>{
  return(true ? printc() : "Expected array.got something else");
}
printsc();//calling the function
function printc(){
 return window.print();
}

//conclusion
//print the contents of the current window