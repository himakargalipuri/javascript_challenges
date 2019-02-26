//Given an array of mixed value types. Return an array of their types [1,’adsf’, [a,b], {}, undefined, true] = [number, string, array, object, undefined, boolean]
//Expected input type : Array with different type of elements in it.
  
var arr = [123,"Akhil",{"abc":123},[1,2,3],undefined,true];
//Tried with different inputs like  123,"Akhil",{"Akhil" : 123},["akhi",123],true...

//This function is to Check the type of array elements...
const arraytyp = (arr) =>{
  var arry = []
  var len = arr.length;
  for(var i = 0; i < len; i++)
    {
      var txt = typeof(arr[i]);
        if( txt == "object")
          {
            if(Array.isArray(arr[i]))
              arry.push("Array");
              // console.log("[" + arr[i] + "]" + " is " + "Array");
            else
              arry.push("Object");
              // console.log(arr[i] + " is " + "Object");
          }
        else
          arry.push(typeof(arr[i]));
          // console.log(arr[i] + " is " + txt);
    }
  console.log(" Array of Array elements types is ");
  console.log(arry);
}

const arraytype = (arr) => {
  return ( (Array.isArray(arr)) ? arraytyp(arr) : console.log("Failed to Execute because of Wrongly Entered Input") ); 
};

console.log("Given array is ");
console.log(arr);
//Calling the function here
arraytype(arr) ;

//Expected output when the Given Array [123,"Akhil",{"abc":123},[1,2,3],undefined,true] is ["number", "string", "Object", "Array", "undefined", "boolean"]

//Expected output when the Given input is "Akhil" Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is 123 Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input