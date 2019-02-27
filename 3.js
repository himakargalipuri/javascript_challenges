// 3. Find length of a given number without converting it to string

var num = 123;
function findLength(n){
    if(n<0){ n = n*(-1); }    //checking if the input number is negative
    if(n == 0){ return `Length is 1`; }
    var c=0;
    while(n>1){     //checking for other than 0 or negative input number by reducing it to 0
      n = n/10;
      c += 1;         //incrementing c (count) value till n>1
    }
    return `Length is ${c}`;
  }

//checking various inputs
const  init = () => {
  ((num == "") || !(typeof num == 'number')) ? (console.log("Expected Number, Got something else")) : console.log(findLength(num));
}
init();
          
  //conclusion: 
  // Checked with 123, "123", [123], true/false, {"a": 123} 
  
  //Input: 123                      => Output: 3
  //Input: other than number        => Output: Expected Number, Got something else
  