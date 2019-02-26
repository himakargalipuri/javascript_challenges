//8. Create classes for square and rectangle to return perimeter and area when 
// given length and breadth 

var len = 10, br = 2;
const  init = () => {
    (len == "" || br == "" || !(typeof len == 'number') || !(typeof br == 'number')) ?
     console.log("Expected Number, Got something else") : rectSquare(len, br);
    //checking the input value
}

const square = (l) => {
    class Square{       //creating Class Square
      constructor(l){
        this.l=l;
      }
    area(){ return this.l * this.l;}
    perimeter(){ return this.l * 4;}
    }
    var sq = new Square(l), a, p;
    a = sq.area();
    p = sq.perimeter();
    console.log("Square: Area = " + a + ", Perimeter = " +p);
}

const rectangle = (l, b) => {   
    class Rectangle{            //creating Class Rectangle
        constructor(l, b){
            this.l=l;
            this.b=b;
        }
        area(){ return this.l * this.b;}
        perimeter(){ return 2 * (this.l + this.b)}
    }

    var re = new Rectangle(l, b), a, p;
    a = re.area();
    p = re.perimeter();
    console.log("Rectangle: Area = " + a + ", Perimeter = " +p);
}
//driver code
const rectSquare = (l,b) => {
    square(l);
    rectangle(l,b)
}

init();

     
//Conclusion: 
// Checked with len = 10 br = 2, len = "10" br = 2,  len = "10" br = "2",
//              len = true br= false,  {"len": "5", "br": "6"} 
  
// Input: len = 10, br = 2       
// => Output: Square: Area = 100, Perimeter = 40
//            Rectangle: Area = 20, Perimeter = 24
// 
//Input: other than len = Number and br = Number  => Output: Expected Number, Got something else
  