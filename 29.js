//29. Return the index of all capital letters 

var str = "hElo WorLD!";
const  init = () => {
    ((str == "") || !(typeof str == 'string')) ? console.log("Expected String, Got something else") : console.log(capitalIndex(str));
}
//driver code
const capitalIndex = (st) => {
  var res = "";
    for (let i in st) {
      if (st[i].match(/[A-Z]/)) {    //matching every character with A-Z
        res += st.indexOf(st.charAt(i)) + " ";
        // storing indexes in res
      }
    }
  return res;
}
init();

     
//Conclusion: 
// Checked with "hElo WorLD!", 1234,  [1234], true/false,  {"a": "5", "b": "6", "c": "8"} 
  
//Input: "hElo WorLD!"       => Output: 1 5 8 9
//Input: other than String   => Output: Expected String, Got something else
  