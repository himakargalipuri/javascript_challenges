//8.create classes for square and rectangle to return perimeter and area whengiven length and breadth
var a=5;
var l=5;
var b=4;
 class square {
     constructor() {
    this.area = a*a;
      this.perimeter= 4*a;
       }}
       var sq =new square();
       console.log("area of the square");
  console.log(sq.area);
  console.log("perimeter of the square");
  console.log(sq.perimeter);
  
  class rectangle {
    constructor() {
      this.area = l*b;
      this.perimeter= 2*(l+b);
    }
  }
  var rect = new rectangle();
  console.log("area of the rectangle");
  console.log(rect.area);
  console.log("perimeter of the rectangle");
  console.log(rect.perimeter);
      
  //conclusion
  //Expected output for the given input a=5,l=5,b=4 is area of the square 25
  // perimeter of the square 20
  //  area of the rectangle  20
  // perimeter of the rectangle 18
  
