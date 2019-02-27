//Flip a coin()->return random heads or tails
const coinFlip=()=> {
  var n=Math.floor(Math.random() * 2);//math.random can generate 0 and 1
  if(n==0)
  console.log("head");
  else
  console.log("tail");
  
}
var res=coinFlip();
//conclusion
//Expected output is head or tail