
var val = "Hello World";
let hwRegex = /hello/
let newVal = hwRegex.test(val)
console.log(newVal)

const nyObj = {
    a : 1,
    c : 2,
}
var hasIt = "name" in nyObj
console.log(hasIt)
const number = [1,2,3,4,5,6,7,8,9,10]
const oddNumbers = number.filter(function(num){
    return num % 2 === 0;
})
console.log("odd numbers in the array;",oddNumbers)
const  words = [1,2,3,4,5,6,7,8,9,0]
const someEvenNums = words.some(function (num){
    return num % 2 === 0;
})
console.log(someEvenNums)
// a js program that checks if y is +,- or 0 and displays an appropraite message
/*let y = [1,2,3,4,-4,0,7]
const checkNum = y.filter(function(num){
    return num % 2 === 0;
})
console.log(checkNum)*/
const y = parseFloat(prompt("Enter a number:"));


    if (y > 0){
       console.log ("Positive integer")
    }
    else if (y = 0){
      console.log("Zero") 
    }
    else{
       console.log("Negative integer") 
    }
    // use the some and filter keywords 
// filter 
const myObj = [1,3,5,7,9]
const evenNumbers = myObj.filter(num => num % 2 === 1)
console.log(evenNumbers)
// some returns true

const checkEvenNum = myObj.some(num => num % 2 === 0)
console.log("there are no such numbers;",checkEvenNum)

var result = 7 * (true + true);
console.log(result)
// recursion in js 
function countDown(number){
    console.log(number)
    var newNum = number - 1
    if (newNum > 0){
        countDown(newNum)
    }
}
console.log(countDown(7))
function countUp (number){
    if (number <= 10){ // condition
    console.log(number)
    countUp(number + 1) // recurse
    } 
}
countUp(1);
function countUp(num){
    if(num <= 10){  //  condition understanding how the code should work
        console.log(num);
        countUp(num+1);// recurse
    }
    
}
countUp(1);