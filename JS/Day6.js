// Objects 

// const person={
//     name:"Sridhar Raj P",
//     age:27,
//     skills:"React JS"
// }

// Accessing Object Properties - 1. using dot notation, 2. using bracket notation

// 1. using dot notation - objectName.key

// console.log(person.name)
// console.log(person.age)
// console.log(person.skills)

// 2. using bracket notation - objectName["propertyName"]

// console.log(person["name"])
// console.log(person["age"])
// console.log(person["skills"])

// console.log(person)
// console.log(typeof(person))

// Nested Objects

// const student={
//     name:"Sridhar Raj",
//     age:27,
//     marks:{
//         HTML:90,
//         CSS:90,
//         BS:80,
//         JS:80,
//         RJS:70,
//         Redux:60
//     }
// }

// console.log(student.marks)
// console.log(student.marks.RJS)

// Object Methods

// const person={
//     name:"Sridhar Raj P",
//     age:27,
//     greet:function(){
//         // name="Sridhar Raj P"
//         console.log("Welcome to Credo Systemz Hi "+this.name)
//     }
// }

// console.log(person)
// person.greet()

const person={
    name:"Sridhar Raj P",
    age:27,
    skills:"React JS"
}

// for (const property in person){
//     console.log(`${property} : ${person[property]}`)
// }

// const details={
//     salary:40000,
//     email:"sridhar@gamil.com"
// }

// answer=Object.assign(person, details)
// console.log(person)
// console.log(details)
// console.log(answer)


// console.log(Object.keys(person))
// console.log(Object.values(person))
// console.log(person)
// for(const [key, values] of Object.entries(person)){
//     console.log(`${key} : ${values}`)
// }

// ES6 

// Variable - let, const 

// let name="Sridhar"
// name="Sridhar Raj P"
// let name="Sri"
// console.log(name)

// const name="Sridhar Raj P"
// name="Sri"
// const name="Sri"

// const name;
// name="Sri"
// console.log(name)

// let name="Sridhar"
// {
//     let name="Raj"
//     console.log(name)
// }
// console.log(name)

// var name="Sridhar"
// name="Sridhar Raj P"  //reasign
// var name="Sri" // redeclare
// console.log(name)

// Arraw Function

// add=(x,y)=>x+y 
// console.log(add(10,20))

// Default Parameter Value 

// function add(a=5,b=10)
// {
//     console.log(a+b)
// }
// add()
// add(10,50)
// add(90,10)

// Template Literals

// FName="Sridhar"
// LName="Raj P"

// console.log(`First Name - ${FName} Last Name - ${LName} `)

// Spread Operator

// odd=[1,3,5]
// even=[2,4,6]
// answer=[0,7,9,...odd, ...even]
// console.log(answer)

// odd=[1,3,5]
// // even=[2,4,6,...odd]
// // even=[...odd,2,4,6]
// even=[2,...odd,4,6]
// console.log(even)

// rest parameters 

// function add(a,b,c, ...args)
// {
//     console.log(a)
//     console.log(b)
//     console.log(c)
//     console.log(args)
// }

// add(1,2,3,4,5,6,7,8,9,0)

// Destructuring Assignment 

// Array Destructuring 

// function getScores()
// {
//     return [10,20,30,40,50]
// }

// let [a,b,c,d,e]=getScores()

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)

// topics=["HTML","CSS","JS","BS"]

// let [a,b,c,d]=topics

// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)

// Object Destructuring (Extract Data Easily)

