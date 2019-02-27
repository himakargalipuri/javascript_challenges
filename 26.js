//26. Return 7 days from now date as well as 2 days ago date from now 

const getFuturePast = () =>{
  console.log("7 days from now date: " + new Date(new Date().setDate(new Date().getDate() + 7)) + "\n" + "\
  2 days ago date from now: "+ new Date(new Date().setDate(new Date().getDate() - 2)))
  //using the inbuilt date set and get methods to obtain the rquired dates.
}

getFuturePast()

// Conclusion:
// Output:
// 7 days from now date: Tue Mar 05 2019 16:29:23 GMT+0530 (IST)
// 2 days ago date from now: Sun Feb 24 2019 16:29:23 GMT+0530 (IST)