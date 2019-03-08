function namesObj() {
  var arr = [
    {
      'name': 'AKHIL',
      'age': 22
    },
    {
      'name': 'RAJ',
      'age': 24
    },
    {
      'name': 'BELDARI',
      'age': 28
    }
  ];
  var names = [];
  var len = arr.length;

  var nam = new Array;
  for (var o in arr) {
    nam.push(arr[o].name);
  }
  document.getElementById("res").innerHTML = "Names of the object are ";
  document.getElementById("result").innerHTML = nam;
  console.log("Names of the object are");
  console.log(nam);

  var val = new Array;
  for (var o in arr) {
    val.push(arr[o].age);
  }
  document.getElementById("val").innerHTML = "Values of the object are ";
  document.getElementById("value").innerHTML = val;
  console.log("Values of the object are");
  console.log(val);
}