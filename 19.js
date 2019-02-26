// 19. Given an array of objects with names and ages. Return Segregated names in 
// an array (extra points sort by age ) 
// [{‘name’: ‘john’, ‘age’:25},{‘name’:’ram’, ‘age’:20}] = [‘john’, ‘ram’] 

var arr = [{"name": "john", "age": 20}, {"name": "ram", "age": 25}, {"name": "ap", "age": 18}] 

if(!(arr instanceof Array) || arr == "") {  //checking if array or not
    console.log("Expected Array, Got something else");
  } else {
    for (let i in arr){ //checking if array of objets or not
        return (arr[i] instanceof Object) ? console.log((arr.sort((a,b) => (b.age - a.age))).map((x) => x.name)) : console.log(("Please enter an array of objects"));
        // sorting by age and retrieving Segregated names using map
    }
  }

    //conclusion: 
    //    Checked with [{"name": "john", "age":20},{"name":"ram", "age":25}, {"name":"ap", "age":18}], 
    //      [1,2,3,4,5],  "1,2,3,4,5", {"a": 1, "b": 2};, true/false
    
    //    Input: [{"name": "john", "age":20}, {"name":"ram", "age":25}, {"name":"ap", "age":18}] 
    //      => Output: [ 'ram', 'john', 'ap' ]
    //    Input: arr = [1,2,3,4,5]  
    //      => Output: Please enter an array of objects
    //    Input: other than array  
    //      => Output: Expected Number, Got something else