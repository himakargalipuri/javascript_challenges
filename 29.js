//29. Return the index of all capital letters 

var str = "hElo WorLD!";

const capitalIndex = (st) => {
  var res = "";
    for (let i in st) {
      if (st[i].match(/[A-Z]/g)) {    //matching every character with A-Z
        res += st.indexOf(st.charAt(i)) + " ";
        // storing indexes in res
      }
    }
  return "Index of Capital Letters: " + res;
}
const  init = () => {
  !(typeof str == 'string') ? console.log("Expected String, Got something else") : console.log(capitalIndex(str));
}

init();

     
//Conclusion: 
// Checked with "hElo WorLD!", 1234,  [1234], true/false,  {"a": "5", "b": "6", "c": "8"}, null, undefined, "", NaN, Infinity, -Infinity 
  
//Input: "hElo WorLD!"       => Output: Index of Capital Letters: 1 5 8 9
//Input: other than String   => Output: Expected String, Got something else
  