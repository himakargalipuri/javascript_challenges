
//17.validate if given input is array
var arry=[1,2,3,4];
var obj={"hi":12};
const verify=(arry)=>{
return((Array.isArray(arry) )? console.log("it is array"):
console.log("it is not array"));
};

const verifyo=(obj)=>{
return(!(Array.isArray(arry) ) && (typeof obj=="object")? console.log("it is obj"):
console.log("it is not object"));
};
var res=verify(arry);
var res1=verifyo(obj);

//conclusion
//input is given an array and object then output is it is array and it is object
//input is other than array the output is it is not array and it is not object