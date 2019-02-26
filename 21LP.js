//Capitalise every alternative letter from a given string, ignore spaces
//Expected input type : String (This is a Sample Text)

var input = "This is a Sample Text";
//Tried with different inputs like 7,{"Akhil" : 123},["akhi",123],...

const capLtr = (input) => {
   //Printing the Given String.
  console.log("Given String as input is :- " + input);
  
  var arr = input.split("");
  var temp = 0;
  //Running the loop to make every alternative letter to upper case.
  for (var x in arr) {
    if (arr[x] != " ") {
      if (temp == 0) {
        arr[x] = arr[x].toUpperCase();
        temp = 1;
      } else if (temp == 1) temp = 0;
    }
  }
  var stg = arr.join("");
  return stg;
}

const AlterCaps = (input) => {
return (typeof input == 'string' ) ? capLtr(input) : "Failed to Execute because of Wrongly Entered Input";    
};

var res = AlterCaps(input);
console.log("String after Capitalizing Every alternative is " + res);

//Expected output for given input This is a Sample Text is ThIs Is A SAmPlE TExT.

//Expected Output for the given input 7 is Failed to Execute because of Wrongly Entered Input.

//Expected Output for the given input {"Akhil" : 123} is Failed to Execute because of Wrongly Entered Input.

//Expected Output for the given input ["akhi",123]  is Failed to Execute because of Wrongly Entered Input.