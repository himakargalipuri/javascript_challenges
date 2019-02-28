// 19. Given an array of objects with names and ages. Return Segregated names in an array (extra points sort by age) 
// [{‘name’: ‘john’, ‘age’:25},{‘name’:’ram’, ‘age’:20}] = [‘john’, ‘ram’] 

var arr = [{"name": "john", "age": 20}, {"name": "ram", "age": 25}, {"name": "ap", "age": 18}, {}] 

const segNames = (arr) => {
  console.log((arr.sort((a,b) => (b.age - a.age))).map((x) => x.name)) 
  // sorting by age and retrieving Segregated names using arr.map
}

const checkObj = (arr)=> {
  for (let i in arr){   //checking if array of objects or not
    return ((arr[i] instanceof Object) || !(arr[i] instanceof Array)) ? 
      (!(arr[i] == null || arr[i] == {}) ? console.log("Please enter a non-empty object"): segNames(arr)) : 
      console.log("Please enter an array of objects");
  }
}
const  init = () => {
  //checking the input value
  !(arr instanceof Array) ? console.log("Expected array, Got something else") : checkObj(arr);
}

init();

    //conclusion: 
    //    Checked with [{"name": "john", "age":20},{"name":"ram", "age":25}, {"name":"ap", "age":18}], 
    //      [1,2,3,4,5],  "1,2,3,4,5", {"a": 1, "b": 2};, true/false, 12345, null, undefined, "", NaN, Infinity, -Infinity
    
    //    Input: [{"name": "john", "age":20}, {"name":"ram", "age":25}, {"name":"ap", "age":18}] 
    //      => Output: [ 'ram', 'john', 'ap' ]
    //    Input: arr = [1,2,3,4,5]              => Output: Please enter an array of objects
    //    Input: other than array of objects    => Output: Expected array, Got something else