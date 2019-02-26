//5.Find missing value in an array of numbers
//Ex: [7, 2, 3, 6, 5, 9, 1, 4, 8]
var arr = [1,5,8,9];
var mis= [];
const missing=(arr) => {
    for(var i = 1; i < arr.length; i++) 
    {    
       if(arr[i] - arr[i-1] != 1) 
        {         
            var x = arr[i] - arr[i-1];
            var j = 1;
            while (j<x)
            {
                mis.push(arr[i-1]+j);
                j++;
            }
        }
    }//loop runs untill i< arr.length
console.log("The missing numbers are" );
console.log(mis);
}//print missing numbers
if(arr=="")
 console.log("Enter input");
else if(!(typeof arr=='object'))
    console.log("Expected array.got something else");
else 
var res=missing(arr);//call the function missing
  
//conclusion
//checked different inputs like "123",1234,boolean values.
//input is array like [1,5,8,9] => output is The missing numbers are [2,3,4,6,7]
//input is other than array then output is "Expected array.got something else"