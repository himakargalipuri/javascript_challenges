// 21. Capitalise every alternative letter from a given string, ignore spaces 

var str = "Hello world!"

const toAltUpper = (str) => {
  var arr = str.split(""), c=0
  for(let i in arr){
    if(arr[i] == " "){continue}   //skipping the loop if space occured
    else{
      c++ 
      if(c==2)    //Tracking the 2nd character by ignoring space
      {
        arr[i] = arr[i].toUpperCase();   //Replacing the 2nd character with Uppercase
        c=0;
      }
    }
  }
  console.log(arr.join().replace(/,/g, ""))
}

const  init = () => {
  !(typeof str == 'string') ? console.log("Expected String, Got something else") : ((str == "") ? console.log("Please Enter a non-empty String") : toAltUpper(str));
  //checking the input value
}
init();

        
  //conclusion: 
  // Checked with "Hello world!", ["welcome", "abort"], true, 1234, 
  //   {"ahello: 1, "world": "asdf", "c": true, "ak": undefined}, null, undefined, "", NaN, Infinity, -Infinity 
  
  //Input: "Hello world!"       => Output: HElLo WoRlD!
  //Input: ""                   => Output: Please Enter a non-empty String
  //Input: other than string    => Outupt: Expected string, Got something else
  