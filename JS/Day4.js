// String - 1. Single Quotes, 2. Double Quotes, 3. Backticks  ``

// Name='I am "Sridhar Raj"'
// console.log("I am "+Name)

// FName="Sridhar"
// LName="Raj P"
// console.log("Frist Name - "+FName+" "+"Last Name  - "+LName)
// console.log(`Frist Name - ${FName} Last Name - ${LName}`)

// Name="Credo Systemz"
// console.log(Name)
// console.log(Name[0]) // Index / Position - 0, Length - 1
// console.log(Name[1])
// console.log(Name.length)


// Name="Credo Systemz "
// console.log(Name[0])
// console.log(Name.charAt(6))
// console.log(Name.repeat(5))
// console.log(Name.includes("C"))
// console.log(Name.toUpperCase())
// console.log(Name.toLowerCase())


// display="Ball Bat"
// answer=display.replace("B","C")
// answer=display.replaceAll("B", "C")
// console.log(answer)

// display="Programming"
// answer=display.startsWith("P")
// console.log(answer)
// answer1=display.endsWith("ing")
// console.log(answer1)

// answer=display.indexOf("g")
// answer1=display.lastIndexOf("g")
// console.log(answer)
// console.log(answer1)

// FName="Credo "
// LName="Systemz"

// answer=FName.concat(LName)
// console.log(answer)
// console.log(FName+LName)




// display="Credo Systemz - HTML CSS BS JS React Redux"
// console.log(display.slice(1,5)) // 1<5 - 1,2,3,4, 1<=5 - 1,2,3,4,5
// console.log(display)
// console.log(display.split("-"))
// console.log(display.trim())

// Math - Properties and Mehtods

// Methods - Math.abs(), Math.cos(), Math.floor(), Math.log(),
// Math.min(), Math.Max(), Math.pow(), Math.random()

//Preperties - Math.E (Eules's Number) - 2.718
// Math.LN10 - 2.303
// Math.LN2 - 0.693
// Math.Log10E - 0.434
// Math.Log2E - 1.443
// Math.PI - 3.14
// Math.SQRT1_2 - 0.707
// Math.SQRT2 - 1.414

// a=5
// // answer=3.14*a*a
// answer=Math.PI*a*a
// console.log(answer)

// console.log(10-20)
// console.log(Math.abs(10-20))

// console.log(Math.cos(10))
// console.log(Math.exp(0))

// console.log(Math.floor(5.95))
// console.log(Math.round(5.93))

// console.log(Math.max(1,2,3,4,5,6,7,8,9))
// console.log(Math.min(1,2,3,4,5,6,7,8,9))

// console.log(Math.pow(5,5))
// console.log(Math.sin(1))
// console.log(Math.tan(1))
// console.log(Math.random())

answer=new Date()
console.log(answer)

answer.setFullYear(2050)
console.log(answer.getDay())

// console.log(answer)
// console.log(answer.getFullYear())
// console.log(answer.getMonth()+1)  // J - 0, Dec - 11
// console.log(answer.getDate())
// console.log(answer.getDay()) // S - 0, Sat - 6