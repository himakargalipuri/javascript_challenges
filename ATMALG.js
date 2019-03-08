// var n = true;
// // if(typeof n == "boolean")
// //   console.log("Boolean");
// // else
// //     console.log("Not Boolean");
// if(typeof n == "number")
//   if(Number.isNaN(n) && n != "INFINITY" && n != -"INFINITY")
//   console.log("Not number");

// else
//     console.log("Number");
var obj = {
    2000 : 4,
    500 : 11,
    100 : 50
};

var sum = 0, bal = 0;
var n2 = 0, n5 = 0, n1 = 0;
var amt = 15100;
var c=0;
console.log(obj);
for(var x in obj)
    sum += (x*obj[x]);  

//  console.log("Available amount in ATM Before transaction " + sum);
 console.log("Input amount is " + amt);

if ( (amt % 100 == 0) && (amt < sum) ) {
    for (var i = amt; i > 0;) {
        if (i >= 2000 && obj["2000"] != 0) {
            n2 = Math.floor(i / 2000);
                if (obj["2000"] >= n2 && obj["2000"] != 0) {
                    i = i - (n2 * 2000);
                     obj["2000"] = ( obj["2000"] - n2);
                    
                } else if (obj["2000"] < n2 && obj["2000"] > 0) {
                    i = i - ( obj["2000"] * 2000);
                    n2 =  obj["2000"];
                     obj["2000"] = ( obj["2000"] - n2);
                    
                }
        }else if (i >= 500 && obj["500"] != 0) {
            n5 = Math.floor(i / 500);
                if ( obj["500"] >= n5 &&  obj["500"] != 0) {
                    i = i - (n5 * 500);
                     obj["500"] = ( obj["500"] - n5);
                    
                }
                else if (( obj["500"] < n5 &&  obj["500"] > 0)) {
                    i = i - ( obj["500"] * 500);
                    n5 =  obj["500"];
                     obj["500"] = ( obj["500"] - n5);
                    
                }
        }
        else if (i >= 100 && obj["100"] != 0) {
            n1 = Math.floor(i / 100);
                if ( obj["100"] >= n1 &&  obj["100"] != 0 ) {
                    i = i - (n1 * 100);
                     obj["100"] = ( obj["100"] - n1);
                    
                }
                else if ( obj["100"] < n1 &&  obj["100"] > 0) {
                    i = i - ( obj["100"] * 100);
                    n1 =  obj["100"];
                     obj["100"] =  (obj["100"] - n1);
                    
                }
            }
    }
    console.log("Notes dispensed are ")

    console.log("2000 notes are " + n2);

    console.log("500 notes are " + n5);

    console.log("100 notes are " + n1);
    
    console.log(obj);

    // for(var x in obj)
    //     bal += (x*obj[x]);  

    // console.log("Available amount in ATM After transaction " + bal);
}
else {
    console.log("Requested amount cannot be dispensed Please Enter in multiples of 100.");
}