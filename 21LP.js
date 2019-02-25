//Capitalise every alternative letter from a given string, ignore spaces
//Expected input type : String (This is a Sample Text)

var input = "This is a Sample Text";

const AlterCaps = (input) => {
return (typeof input == 'string' ) ? capLtr(input) : "Failed to Execute because of Wrongly Entered Input";
    
};
var res = AlterCaps(input);

//Expected output for given input is ThIs Is A SAmPlE TExT.

function capLtr(input) {
  var words = input.split(" ");
  //Printing the Given String.
  console.log("Given String as input is :- " + words);
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
  //Printing the String with Expected requirement.
  console.log(stg);
}
