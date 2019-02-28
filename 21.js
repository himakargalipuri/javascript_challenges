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
  console.log(arr.join().replace(/,/g,""))
}

const  init = () => {
  ((str == "") || !(typeof str == 'string')) ? console.log("Expected string, Got something else") : toAltUpper(str);
  //checking the input value
}
init();

        
  //conclusion: 
  // Checked with ""Hello world!", ["welcome", "abort"], true, 1234  {"ahello: 1, "world": "asdf", "c": true, "ak": undefined} 
  
  //Input: "Hello world!"       => Output: HElLo WoRlD!
  //Input: other than string    => Outpt: Expected string, Got something else
  