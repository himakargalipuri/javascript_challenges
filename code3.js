//3.Find length of a given number without converting it to string
  
  var n=123;
 var c=0;
 const  length=(n) => {
  while(n>1){ 
    n=n/10;
    c+=1;
  } console.log("length of the number is"  + " " + c );//it gives the count
 }//The loop runs untill the number is less then 1 
 //checking different inputs
  if(n==0)
    console.log("length is 1");
  else if(n=="")
    console.log("Enter input");
    else if(!(typeof n=='number'))
    console.log("Expected array.got something else");
      else{
    var res=length(n);
    //calling the length() function
  }

//conclusion
//checked with different inputs like "123",[123],boolean values,array.
//input is number like 123 => length of the number is 3
//input is like string,array,boolean => output is "Expected array.got something else"
