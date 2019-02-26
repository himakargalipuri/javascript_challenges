//18. Find sum of numbers between 1 to n. Dont use loop.

var n = 3;

//checking valid input
if(!(typeof n == 'number') || n==""){  //checking if number is valid or not
  console.log("Expected Number, Got something else");
} else if(n<0){ console.log("Please input a positive number"); }
else{ console.log("Sum = " + (n * (n+1)/2)) }     //Basic Mathematical Formula

  //conclusion: 
  // Checked with 5, -5, "5", [5],  , true/false,  {5: 5} 
  
  //Input: 5     => Output: Sum = 15
  //Input: -5    => Output: Please input a positive number
  //Input: other than number   => Outupt: Expected Number, Got something else
  