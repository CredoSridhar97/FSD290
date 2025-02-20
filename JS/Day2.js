//Assignment Operators - +=,-=,*=,%=,/=,**=

// num1=5
// num2=5
// answer=num1+num2
// console.log(answer)

// num1=10
// num2=2
// console.log(num1+=num2)
// console.log(num1-=num2)
// console.log(num1*=num2)
// console.log(num1/=num2)
// console.log(num1%=num2)
// console.log(num1**=num2)
// num1+=num2 // num1=num1+num2 
// num2+=num1 // num2=num2+num1
// num1-=num2
// num1*=num2
// console.log(num1)
// console.log(num2)


// Comparison Operators - >,>=,<,<=,==,!=  ,  ===,!==

// num1=5
// num2="5"

// console.log(num1==num2)
// console.log(num1!=num2)
// console.log(num1>num2)
// console.log(num1<num2)
// console.log(num1>=num2)
// console.log(num1<=num2)

// console.log(num1===num2)
// console.log(num1!==num2)

//Logical Operators - &&, ||, !

// num1=5
// num2=5

// console.log(num1==num2 && num1>num2 && num1<num2 && num1===num2)
// console.log(num1==num2 || num1>num2 || num1<num2)
// console.log(!num1==num2)

// Increment and Decrement i++, ++i,   i--, --i

// num1=5
// // answer=++num1   
// // answer=--num1 
// // answer=num1++
// answer=num1--
// console.log(answer)
// console.log(num1)

// Swap 2 Number - 1. without swap, 2. with swap

// without swap - a=5, b=10    =>  op - a=10,b=5

// a=5
// b=10

// console.log("Before Swapping")
// console.log("A - "+a)
// console.log("B - "+b)

// a=a+b // a=5, b=10     15 =5+10 a=15
// b=a-b  //   5=15-10  b=5
// a=a-b   //    10=15-5  a=10

// console.log("After Swapping")
// console.log("A - "+a)
// console.log("B - "+b)


// 2. with swap

// a=10
// b=20

// console.log("Before Swapping")
// console.log("A - "+a)
// console.log("B - "+b)

// c=a  // a=10,c=10
// a=b  // b=20, a=20
// b=c   //c=10,b=10

// console.log("After Swapping")
// console.log("A - "+a)
// console.log("B - "+b)

// Control STM - if, if...else, nested if...else, ladder if...else, switch case 

// age=25
// if(age>=18)
// {
//     console.log("VE")
// }


// age=14
// if(age>=18)
// {
//     console.log("VE")
// }
// else{
//     console.log("NVE")
// }

// mark=30
// if(mark>=35)
// {
//     console.log("Pass")
// }
// else{
//     console.log("Fail")
// }

// a=50
// b=10

// if(a>b)
// {
//     console.log("A is Biggest Value")
// }
// else{
//     console.log("B is Biggest Value")
// }


// number=67
// if(number%2==0){
//     console.log("Even Number")
// }
// else{
//     console.log("Odd Number")
// }

// year=1997
// if(year%4==0)
// {
//     console.log("Leap Year")
// }
// else{
//     console.log("Not Leap Year")
// }

// check="u"
// if(check=="A" || check=="E" || check=="I" || check=="O" || check=="U" || 
//     check=="a" || check=="e" || check=="i" || check=="o" || check=="u"
// )
// {
//     console.log("VL")
// }
// else{
//     console.log("NVL")
// }

// a=1500
// b=1500
// c=1500

// if(a>b && a>c)
// {
//     console.log("A is Biggest Value")
// }
// else if(b>a && b>c)
// {
//     console.log("B is Biggest Value")
// }
// else if(c>a && c>b)
// {
//     console.log("C is Biggest Value")
// }
// else
// {
//     console.log("A & B & C is Equal")
// }

// number=0
// if(number>0)
// {
//     console.log("+ve")
// }
// else if(number<0)
// {
//     console.log("-ve")
// }
// // else if(number==0)
// // {
// //     console.log("Zero")
// // }
// else{
//     console.log("Zero")
// }


// a=50
// b=100
// c=1500

// if(a>b)
// {
//     if(a>c){
//         console.log("A is Biggest Value")
//     }
//     else{
//         console.log("C is Biggest Value")
//     }
// }
// else{
//     if(b>c)
//     {
//         console.log("B is Biggest Value")
//     }
//     else{
//         console.log("C is Biggest Value")
//     }
// }

// day = 6
// switch (day) {
//     case 1:
//         console.log("Mon")
//         break
//     case 2:
//         console.log("Tue")
//         break
//     case 3:
//         console.log("Wed")
//         break
//     case 4:
//         console.log("Thu")
//         break
//     case 5:
//         console.log("Fri")
//         break
//     case 6:
//         console.log("Sat")
//         break
//     case 7:
//         console.log("Sun")
//         break
//     default:
//         console.log("Please Enter 1 to 7 Values Only")
//         break

// }

//Loop STM - do...while, while, for 

// i=1
// do{
//     // console.log(i)
//     console.log("Hi Welcome to Credo Systemz")
//     i++
// }while(i<=5)

// i=1
// while(i<=3)
// {
//     // console.log(i)
//     console.log("Front End Web Development ")
//     i++
// }

// for(i=1;i<=5;i++)
// {
//     // console.log(i)
//     console.log("Hi I am Sridhar")
// }

for(i=1;i<=10;i++)
{
    console.log(i+ " * 2 = "+i*2)
}