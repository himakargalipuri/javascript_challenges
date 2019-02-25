// 3. Find length of a given number without converting it to string

var num = 1234;
function findLength(n){
    if(n<0){ n=n*(-1); }    //checking if the input number is negative
    if(n==0){ return `Length is 1`; }
    var c=0;
    while(n>1){     //checking for other than 0 or negative input number by reducing it to 0
      n=n/10;
      c+=1;         //incrementing c (count) value till n>1
    }
    return `Length is ${c}`;
  }

  //checking various inputs
  if(num == ""){
    console.log("Number not provided");
  } else if(!(typeof num == 'number')) {
    console.log("Expected Number, Got something else");
  } else { 
    console.log(findLength(num));      //calling the function
  }
  
          
  //conclusion: 
  // Checked with 123, "123", [123], true/false, {"a": 123} 
  
  //Input: 123                      => Output: 120
  //Input: other than number        => Outpt: Expected Number, Got something else
  