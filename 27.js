//27. Reverse a string

var str = "ak121786";

const myReverse = () => {
!(typeof str == 'string') ? console.log("Expected String, Got something else.") : console.log(str.split("").reverse().join().replace(/,/g, ""));
//changing the String to array, then reverse then back to String and replacing "," with ""
}

myReverse()
//conclusion: 
// Checked with "ak121786", [1234,"ak"], true/false,  1234, {"a": 123, "b": "abcd", "c": "128"}, null, undefined, "", NaN, Infinity, -Infinity 
//Input: "ak121786"          => Output: 687121ka
//Input: other than String   => Output: Expected String, Got something else.
  