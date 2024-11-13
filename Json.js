var myObj = { name: "Arnav", age: 15, grade: 9 };
var myJSON = JSON.stringify(myObj);
var newObj = JSON.parse(myJSON);
console.log(newObj.name);
console.log(newObj.age);
console.log(newObj.grade);