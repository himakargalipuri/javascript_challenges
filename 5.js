var arr = [7, 2, 3, 6, 5, 9, 10,12, 1, 4, 8],len=arr.length ;
var missN=0;
function myValidation(){
    text = "Array";
    arr.sort((a,b) => (a-b));
    for(let i=0; i<len; i++){
        if(arr[i+1]-arr[i]==2){
            missN=arr[i]+1;
            console.log("Missing number is " + missN)
        } 
    }
}

//checking valid input
if(!(arr instanceof Array) || arr == ""){
    console.log("Expected Array, Got something else");
} else {
    myValidation();
}
        
  //conclusion: 
  // Checked with [1,2,3,5], "1,2,3,5", true/false,  {"a": 5, "b": 6, "c": 8} 
  
  //Input: [1,2,3,5]               => Output: Missing number is 4
  //Input: other than array        => Outpt: Expected Number, Got something else
  