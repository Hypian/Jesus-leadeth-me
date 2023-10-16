
var val = "Hello World";
let hwRegex = /hello/
let newVal = hwRegex.test(val)
console.log(newVal)

/*const myObj = {
    a : 1,
    c : 2,
}
var hasIt = "name" in myObj
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
console.log(someEvenNums)*/
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