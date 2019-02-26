//Given an array of strings/numbers... sort and eliminate duplicates
  var arr = [2,2,1,4,9,7,5,3,"ap","sw","de"];
  const dupls=(arr) =>{ 
    var out = Array.from(new Set(arr));//Here array.form creates new array and set object can store unique values 
    console.log(out);
    console.log(out.sort());//sorting an array
   }
         
         const duplicate=(arr) => {
          return((Array.isArray(arr)) ? dupls(arr) : "Expected array.got something else");
        };
        var res= duplicate(arr);
    
    //conclusion
    //checked with different inputs like "483",[222],boolean values,array.
    //input is array like [2,2,1,4,9,7,5,3,"ap","sw","de"]  => output is [2,1,4,9,7,5,3,"ap","sw","de"]
    //                                                   [1,2,3,4,5,7,9,"ap","de","sw"](after sorting)
    //input is like other than array => output is "Expected array.got something else"
    
    
  
  
