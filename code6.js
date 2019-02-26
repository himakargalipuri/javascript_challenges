//6.Given an array of mixed even and odd numbers. Sort only even numbers.Ignore odd numbers and their positions.
//Ex:[8, 2, 3, 6, 5, 9, 1, 4, 7]
//Ex:[2, 4, 3, 6, 5, 9, 1, 8, 7]
  
  var arr = [8, 2, 3, 6, 5, 9, 1, 4, 7];

  const removeodd = (arr) => {
   for (var i = 0; i < arr.length; i++) {
    if ((arr[i] % 2) == 1) {
      arr.splice(i, 1);//here the i th index of one element is removed.
        i = i-1;
    }
}
console.log(arr);//the array will be printed after removing odd elements.
arr.sort();//sorting the elements in an array
console.log("the sorted array is");
console.log(arr);
}
if(arr=="")
 console.log("Enter input");
else if(!(typeof arr=='object'))
    console.log("Expected array.got something else");
else 
var res=removeodd(arr);//calling the function 

//conclusion
//conclusion
//checked different inputs like "123",1234,boolean values,array.
//input is array like [8, 2, 3, 6, 5, 9, 1, 4, 7] => output is the sorted array is [8,2,6,4]
 //                                                            [2,4,6,8] 
//input is other than array then output is "Expected array.got something else"


  

