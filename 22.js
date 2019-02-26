//22. flipacoin() -> return a random heads/tails 

    const flipcoin = () => {
      return Math.floor(Math.random()*2) ? "Heads" : "Tails"
      //  Using Math.floor() and Math.Random() to generate 1 and 0 in turn generates Heads and Tails
    }
    console.log(flipcoin())

  //conclusion: 
  // Output: Head Heads Tails Tails Tails Heads Tails Heads Tails Tails Tails Heads and so on