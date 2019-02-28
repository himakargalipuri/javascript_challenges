// 31. Change every 4th character of a string to number 4 
//“This is a fourth character” = “thi4 is a 4our4h ch4rac4er” 

var str = "Welcome to JavaScript!"

const convert = (str) => {
  let arr = str.split(""), c=0
  for(let i in arr){
    if(arr[i] == " "){
      continue    //skipping the loop if space encountered
    } else {
      c++ 
      if(c==4)    //Tracking the 4th character by ignoring space
      {
        arr[i] = 4;   //Replacing the 4th character
        c=0;
      }
    }
  }
  console.log(arr.join().replace(/,/g,""))
}

const  init = () => {
  (str == "") ? console.log("Please enter a valid String") : (!(typeof str == 'string') ? console.log("Expected string, Got something else") : convert(str));
  //checking the input value
}
init();

        
  //conclusion: 
  // Checked with "Welcome to JavaScript!", ["welcome", "abort"], true, 1234,
  //   {"ahello: 1, "world": "asdf", "c": true, "ak": undefined}, null, undefined, "", NaN, Infinity, -Infinity 
  
  //Input: "Welcome to JavaScript!"  => Output: Wel4ome 4o Ja4aSc4ipt4
  //Input: ""                        => Output: Please enter a valid String
  //Input: other than string         => Output: Expected string, Got something else
  