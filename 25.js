// 25. Get current date time and convert it into 
// Today is 18 February 2019. Its 4 hours 15 minutes and 13 seconds now 

var d = new Date(), myMonths=[];
myMonths= ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
console.log(d.toString())
console.log("Today is " + d.getDate() + " " + myMonths[d.getMonth()] + " " + d.getFullYear()+ ". \
Its " +d.getHours() + " Hours " + d.getMinutes() + " minutes " + "and " + d.getSeconds() + " seconds now")
//using the inbuilt date set and get methods to obtain the rquired dates.

//Conclusion
// 2019-02-26T10:51:33.398Z  <= Default UTC date and time
// Today is 26 February 2019. Its 16 Hours 21 minutes and 33 seconds now

// Tue Feb 26 2019 16:19:49 GMT+0530 (IST)  <= After converting UTC to GMT+0539 or Browser's Local Time
// Today is 26 February 2019. Its 16 Hours 19 minutes and 49 seconds now