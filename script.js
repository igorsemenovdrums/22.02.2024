
const myArray = [prompt("Enter your city name:"), +prompt("Enter city area:"), +prompt("Enter city population:"), prompt("Enter main street:"), prompt("Enter mayors name:")];

function myFunction(myArray) {

const myObject = {};    

for (let i = 0; i < myArray.length; i++) {

myObject.name = myArray[0];
myObject.area = myArray[1];
myObject.population = myArray[2];
myObject.mainStreet = myArray[3];
myObject.mayorsName = myArray[4];

}

return myObject;

}

const obj = myFunction(myArray);

console.log(obj);