//33. Merge two arrays/objects 

var array1, array2, myObj1, myObj2;;
    array1 = ['a', 'b', 'c'];
    array2 = ['d', 'e', 'f'];
    myObj1 = {"a": 3, "b": 5, "c": 4};
    myObj2 = {"d": 3, "e": 5, "f": 4};

const  init = () => {
    //checking the input values
    if(!(array1 instanceof Array) || !(array2 instanceof Array)){
      console.log("Expected Arrays, Got something else");
    } else if(!(myObj1 instanceof Object) || (myObj1 instanceof Array) || !(myObj2 instanceof Object) || (myObj2 instanceof Array)){
      console.log("Expected Objects, Got something else");
    } else {
      if(myObj1 == null || myObj2 == null){       //checking null object
        console.log("Please enter other than null object")
      } else {
          arrMerge(array1, array2);
          objMerge(myObj1,myObj2);
      }
    }
}

const arrMerge = (ar1, ar2) => {
  console.log( ar1.concat(ar2));   //concatinating the arrays
}

const objMerge = (ob1, ob2) => {
  console.log(Object.assign(ob1,ob2));   //Merging objects into one
}

init();
     
//Conclusion: 

// Checked with 
// array1 = ['a', 'b', 'c']; array2 = ['d', 'e', 'f'];            myObj1 = {"a": 3, "b": 5, "c": 4}; myObj2 = {"d": 3, "e": 5, "f": 4};, 
// array1 = "abc"; array2 = ['d', 'e', 'f'];                      myObj1 = {"a": 3, "b": 5, "c": 4}; myObj2 = {"d": 3, "e": 5, "f": 4};,
// array1 = ['a', 'b', 'c']; array2 = ['d', 'e', 'f'];            myObj1 = ['a', 'b', 'c']; myObj2 = {"d": 3, "e": 5, "f": 4};,
// array1 = true; array2 = ['d', 'e', 'f'];                       myObj1 = false; myObj2 = {"d": 3, "e": 5, "f": 4};,
// array1 = {"a": 3, "b": 5, "c": 4}; array2 = ['d', 'e', 'f'];   myObj1 = false; myObj2 = {"d": 3, "e": 5, "f": 4};,
// array1 = null; array2 = undefined;                             myObj1 = ""; myObj2 = NaN or Infinity or -Infinity
  
//Input: 
// array1 = ['a', 'b', 'c'];
// array2 = ['d', 'e', 'f'];
// myObj1 = {"a": 3, "b": 5, "c": 4};
// myObj2 = {"d": 3, "e": 5, "f": 4};     
//          
//          => Output:   [ 'a', 'b', 'c', 'd', 'e', 'f' ]
//                       { a: 3, b: 5, c: 4, d: 3, e: 5, f: 4 }

//Input: myObj1/myObj2 = null                     => Output: Please enter other than null object

//Input: other than array1 and array2 as Arrays   => Output: Expected arrays, Got something else
//Input: other than myObj1 and myObj2 as Objects  => Output: Expected objects, Got something else
  