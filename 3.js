// 3. Find length of a given number without converting it to string

var num = -1123;
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

const check = (num) => {
  ((isNaN(num)) || (num == Infinity) || (num == -Infinity)) ? console.log("Please enter number other than NaN, +Infinity, -Infinity") : console.log(findLength(num));
}

//checking various inputs
const  init = () => {
  !(typeof num == 'number') ? console.log("Expected Number as input, Got something else") : check(num);
}
init();
          
  //conclusion: 
  // Checked with 123, -1234, "123", [123], true/false, {"a": 123}, null, undefined, "", Infinity, -Infinity, NaN
  
  //Input: 123                            => Output: Length is 3
  //Input: -1234                          => Output: Length is 4
  //Input: NaN or Infinity or -Infinity   => Output: Please enter number other than NaN, +Infinity, -Infinity
  //Input: other than number              => Output: Expected Number as input, Got something else
  