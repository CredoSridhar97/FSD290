// Arrays - Data Type - Object - store multiple values 
// Create an Array - 1. using an array literal, 2. using the new keyword

// 1. using an array literal

// const course=["HTML","CSS","JS","BS","React JS"]
// console.log(course)
// console.log(typeof(course))

// 2. using the new keyword

// const fullStack=new Array("React JS", "Vue", "Node JS","Next JS","Nest JS","Spring Bot")
// console.log(fullStack)
// console.log(typeof(fullStack))

// const course=["HTML","CSS","JS","BS","React JS"]

// console.log(course.reverse()) 

// console.log(course.sort()) // A to Z - Sort 
// console.log(course.reverse()) 

// course.splice(2, 0, "Java","Python","Django")
// course.splice(2,3)
// course.splice(2,1,"JavaScript")
// console.log(course)


// console.log(course.join("  "))
// console.log(course.toString())



// console.log(course.shift())
// console.log(course.unshift("C and C++"))
// console.log(course.pop())
// console.log(course.push("Spring Boot"))
// console.log(course)
// Index / Position - 0, length - 1
// console.log(course)
// console.log(course[10])

// const FEnd=["HTML","CSS","JS","React JS", "Angular","Vue JS"]
// const BEnd=["Java","Python","Django","Flask","Spring Boot","Node JS"]

// console.log(FEnd+BEnd)
// answer=FEnd.concat(BEnd)
// console.log(answer)

// const topics=["Java","Python","Django","Flask","Spring Boot","Node JS", "Java", "Java"]

// console.log(topics)
// // delete topics[0]
// delete topics[3]
// console.log(topics)

// console.log(topics.indexOf("Java"))
// console.log(topics.lastIndexOf("Java"))

// console.log(topics.includes("JavaScript"))

// console.log(topics.slice(2))
// console.log(topics.slice(1,5)) // 1<5 - 1,2,3,4 , 1<=5 - 1,2,3,4,5

// const amount=[1,2,3,4,5]

// for(Element in amount){
//     console.log(amount[Element]*5)
// }

// for(Element of amount){
//     console.log(Element*10)
// }

// amount.forEach(Element=>console.log(Element*5))

// answer=amount.map(Math.sqrt)
// answer=amount.map((element)=>element*5)
// console.log(answer)

// marks=[10,20,15,18,20,30,35,60,70,65,90,80,95]

// answer=marks.filter((Element)=>Element>=35)
// console.log(answer)

// words=["HTML","CSS","JavaScript","BootStrap","React JS","Redux"]

// answer=words.filter((Element)=>Element.length>5)

// console.log(answer)

// const check=[1,2,3,4,5]

// const answer=check.reduce((acc, cv)=>acc+cv,0)
// // 0 + 1 = 1 + 2 = 3 + 3 = 6 + 4 = 10 + 5 =15

// console.log(answer)

values=[10,45,78,23,89,56]

maxanswer=values.reduce((acc, curr)=>
(curr>acc ? curr : acc), values[0])

console.log(maxanswer)