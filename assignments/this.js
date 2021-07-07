/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. window binding
Window binding is when the this keyword refers to the window parent object.
* 2. implicit binding
Implicit binding is when the this keyword refers to the object to the left of the dot (when a method is called)
* 3. new binding
New binding is whenever we create a new object by invoking a constructor function using the "new" keyword, the "this" keyword will be bound to the new object being created.
* 4. explicit binding
Explicit binding is when we explicitly state what the "this" keyword will refer to. call, apply, and bind all accept an object as a first argument that the "this" keyword will refer to. 
The second argument that these methods accept are the normal arguments for our original function. 
Apply lets us input an array name as a second argument instead of maybe strings.
Bind returns a new function that has binded our original function to our object context, so we have to assign it to a variable and call it.
* write out a code example of each explanation below
*/

// Principle 1

// code example for Window Binding

// create function that logs this.age
function sayAge () {
    console.log(this.age);
}

sayAge(); // this function will try to find the age value within the window object but will return undefined because it doesn't exist

// if you wanted to get an age value you would have to set it 
window.age = 20;

sayAge(); // logs 20

// Principle 2

// code example for Implicit Binding

// create object 'me'
const me = {
    name: "Marcus",
    intro: function() {
        console.log(`Hi, my name is ${this.name}`);
    }
}

me.intro(); // this refers to the 'me' object to the left of the dot when it's called, ${this.name} acts as {me.name}

// Principle 3

// code example for New Binding

// creating constructor function "Student"
function Student (name,age) {
    // when using the "new" keyword, an object called "this" is created and is returned. That's why the this keyword will refer to the newly created object
    this.name = name;
    this.age = age;
}

// creating new object "marcus" 
const marcus = new Student("Marcus",24);
console.log(marcus) // this.name and this.age are bound to the the newly created object, and won't refer to the constuctor "Student" function.

// Principle 4

// code example for Explicit Binding

// using apply

// created function "sayHi" that logs "this.name" and an age parameter
function sayHi (age) {
    console.log(`Hi, my name is ${this.name} and my age is ${age}`);
}

// created an object "jamie", that has "Jamie" as the value of a "name" key
const jamie = {
    name: "Jamie"
}

// we are calling our sayHi function, but we've given the "this" keyword the context of our "jamie" object, so it "this.name" behaves like "jamie.name", and passed in our argument of age (24) for our sayHi function
sayHi.call(jamie,24); // 

// if our sayHi function had multiple parameters, we could stick in an array name as an argument when using the apply method.
// if we used bind, we would have to store the newly returned function to a variable, and call it in order to see our logged sentence.