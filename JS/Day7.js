//  person={
//     name:"Sridhar Raj",
//     dob:"09/12/1997",
//     skill:"React JS"
// }

// var {name, dob, skill}=person

// console.log(name)
// console.log(dob)
// console.log(skill)

// ES6  - Let and Const, Arrow Functions, Template Literals, Destructuring
// Spread & Rest Operators, Default Parameters, 


// Promises
// fetch("https://jsonplaceholder.typicode.com/posts")
// .then(Response=>Response.json())
// .then(data=>console.log(data))

// Async/Await

// async function fetchData()
// {
//     const Response=await fetch("https://dummyjson.com/recipes")
//     const data=await Response.json()
//     console.log(data)
// }
// fetchData()

// Classes - Object (new) 

// class User{
//     constructor(name, age){
//         this.name=name
//         this.age=age
//     }
//     sayName(){
//         console.log(this.name + this.age)
//     }
// }

// let user=new User("Sridhar Raj P ", 27)
// user.sayName()

// First Class

// class Animal{
//      // constructor - enables the creation of instances (objects)    
//     constructor(name, age){
//         this.name=name
//         this.age=age
//     }

//     getInfo()
//     {
//         return(`The name of the animal is ${this.name} and age is ${this.age}`)
//     }
// }

// const firstAnimal=new Animal("Rex",10)
// console.log(firstAnimal)
// console.log(firstAnimal.getInfo())

// const secondAnimal=new Animal("Rex",20)
// console.log(secondAnimal)
// console.log(secondAnimal.getInfo())

// setTimeout(functions, milliseconds) -
// Display a Text once After 6 Seconds 
// function greet()
// {
//     console.log("Welcome to Credo Systemz")
// }
// setTimeout(greet,6000)

// function greet()
// {
//     console.log("Credo Systemz")
// }

// let intervalID=setTimeout(greet,5000)
// console.log("Id - "+intervalID)


// setTimeout(()=>{
//     console.log("Sridhar Raj")
// },3000)


// Closure - Nested Functions, Returning a Functions 

// Nested Functions

// function greet(name){
//     function displayName()
//     {
//         console.log("HI "+name)
//     }
//     displayName()
// }

// greet("Sridhar Raj P")


// function greet(name)
// {
//     function displayName()
//     {
//         console.log("Hi "+name)
//     }
//     return displayName
// }

// const G1=greet("Sridhar")
// console.log(G1)

// G1()

// function claculate(x)
// {
//     function multiply(y){
//         return x*y;
//     }
//     return multiply
// }

// multiply1=claculate(10)
// console.log(multiply1)
// console.log(multiply1(10))




// Promises
fetch("https://fakestoreapi.com/products/10")
.then(Response=>Response.json())
.then(data=>console.log(data))
