//flipacoin() -> return a random heads/tails

//This function is genarate a random number 0 or 1...

const flipACoin = () => {
  var n = Math.floor(Math.random() * 2);
    if(n == 0){
      console.log("It's a HEAD");
    }else{
      console.log("It's a TAIL");
    }
}

const flipaCoin = (str) => {
  return ( (true) ? flipACoin() : console.log("Failed to Execute because of Wrongly Entered Input") ); 
};

//Calling the function here
flipaCoin() ;

//Expected output is It's a HEAD or It's a TAIL.
