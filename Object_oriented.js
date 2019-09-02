// Object Oriented Programming: Create a Basic JavaScript Object
// Think about things people see everyday, like cars, shops, and birds. These are all objects: tangible things people can observe and interact with.What are some qualities of these objects? A car has wheels. Shops sell items. Birds have wings.
// These qualities, or properties, define what makes up an object. Note that similar objectsshare the same properties, but may have different values for those properties. For example, all cars have wheels, but not all cars have the same number of wheels.
//
// Objectsin JavaScript are used to model real-world objects, giving them propertiesand behavior just like their real-world counterparts. Here's an example using these concepts to create a duckobject:

let duck = {
  name: "Aflac",
  numLegs: 2
};

//This duckobjecthas two property/value pairs: a nameof "Aflac" and a numLegsof 2.

//Create a dogobjectwith nameand numLegsproperties, and set them to a string and a number, respectivel

let dog = {
name: "Spot",

numLegs: 4

};

// Object Oriented Programming: Use Dot Notation to Access the Properties of an Object
// The last challenge created an object with various properties, now you'll see how to access the values of those properties. Here's an example:
//
// let duck = {
//   name: "Aflac",
//   numLegs: 2
// };
// console.log(duck.name);
// // This prints "Aflac" to the console
// Dot notation is used on the object name, duck, followed by the name of the property, name, to access the value of "Aflac".
//
//
// Print both properties of the dog object below to your console.

let dog = {
  name: "Spot",
  numLegs: 4
};
// Add your code below this line
console.log(dog.name);
console.log(dog.numLegs);
