//Create classes for square and rectangle to return perimeter and area when given length and breadth
//Expected input type : numbers (Length and Breadth).

var len = 4;
var bre = 2;
//Tried with different inputs like  "Akhil",{"Akhil" : 123},["akhi",123],true...

//This function is the class of square...
class square {
  //this method is for calculating the Square area
  static sqrA(len) {
    var sarea = len * len;
    return sarea;
  }
  //this method is for calculating the Square Perimeter
  static sqrP(len) {
    var sperimeter = 4 * len;
    return sperimeter;
  }
}

//This function is the class of rectangle...
class rectangle {
  //this method is for calculating the rectangle area
  static rectA(len, bre) {
    var Area = len * bre;
    return Area;
  }
  //this method is for calculating the rectangle Perimeter
  static rectP(len, bre) {
    var Perimeter = 2 * (len + bre);
    return Perimeter;
  }
}
//This function is to calculate the Area and Perimeter...
const Area = (len, bre) => {
  let rArea = rectangle.rectA(len, bre);
  let rPerimeter = rectangle.rectP(len, bre);
  //Printing the result here
  console.log("Area of Rectangle with Length " + len + " and breadth " + bre + " is " + rArea);
  console.log("Perimeter of Rectangle with Length " + len + " and breadth " + bre + " is " + rPerimeter);

  let sarea = square.sqrA(len);
  let sperimeter = square.sqrP(len);
  //Printing the result here
  console.log("Area of Square with Side " + len + " is " + sarea);
  console.log("Perimeter of Square with Side " + len + " is " + sperimeter);
};

const AreA = (len, bre) => {
  return typeof len == "number" && typeof bre == "number" ? Area(len, bre) : console.log("Failed to Execute because of Wrongly Entered Input");
};

//Calling the function here
AreA(len, bre);

//Expected output when the Given number 4,2 is Area of Rectangle with Length 4 and breadth 2 is 8... Perimeter of Rectangle with Length 4 and breadth 2 is 12... Area of Square with Side 4 is 16... Perimeter of Square with Side 4 is 16...

//Expected output when the Given input is "Akhil" Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is {"Akhil" : 123} Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is ["akhi",123] Failed to Execute because of Wrongly Entered Input

//Expected output when the Given input is true Failed to Execute because of Wrongly Entered Input
