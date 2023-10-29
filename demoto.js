
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
let x = [1,2,3,4,-4,0,7]
const checkNum = y.filter(function(num){
    return num % 2 === 0;
})
console.log(checkNum)
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
function countDownn(num){
    if(num > 1){  //  condition understanding how the code should work
        console.log(num);
        countUp(num-1);// recurse
    }
    
}
countDown(10);
// arrays 
const myArray = [1,2,3,4,5,6,7,8,9]
var fillled = myArray.fill(0)
console.log(fillled)
let yas = [1,2,3,4,5,6,7,8,9,0]
var newzVal = yas.filter(num => num % 2 === 0);
console.log(newzVal);
var maxNum = Math.min(...yas);
console.log(maxNum)
// recap on recursive function ; this is a function that recalls itself with a condition and recursive or (base code)
// example below
function countUpp(val){
    if (val > 10){
        console.log(val);
        countUpp(val + 1);
    }
}
countUpp(1);

function checkMatrix(MatrixA,MatrixB){
    if ( MatrixA.length !== MatrixB.length || MatrixA.length[0] !== MatrixB.length[0]){
        return "This cannot work due to uncorresponding matrix properties";
    }
}
// learnt how to use the ternary operator 
const grade = 45
const result = (grade >80) ? "D1" 
 : (grade > 60 && grade < 80) ? "Pass" : "Fail"
console.log(result)
// Added more knowledge on ternary operator and solved problems without chatGpt lol
function checkEqual(a, b) {
    return a > b || b > a ? "Not Equal" : "Equal"
  
  }
  
  checkEqual(1, 2);
// using some op and filter 
// filter  
const newArrayy = [1,2,3,4,5,6,7,8,9]
const newVall = newArrayy.filter(num => num % 2 === 1)
console.log(newVal)
// some 
const myArrayy = [1,2,3,4,5,6,7,8,9]
const otherVall = myArrayy.some(num => num < 1)
console.log(otherVall)
// i am adding practice on regex or regular expressions lol (test methode)
var herString = "The bugs in my code arent in my bed ";
var herRegex = /[aeiou]/;
var result = herRegex.test(herString)
console.log(result)
// regex but match keyword
// as we saw before the test method or function returns booleans while the match
// now we use the match method
// this one returns an array of matched strings or null if no matches are found
let wordss = "I hate Fox , i wish fox were dead, because fox at my friend lol"
let myRegex = /fox/ig;
let answer = wordss.match(myRegex)
console.log(answer)
// a hyphen can be used to specify range of scope to be matched
let quoteSample = "The quick brown fox jumps over the lazy dog.";
let alphabetRegex = /[a-z]/ig; // Change this line
let result = quoteSample.match(alphabetRegex); // Change this line
// using the caret to exclude what to be matched(negated characters)
let quoteSamplee = "3 blind mice.";
let myRegexz = /[^aeiuo^0-9]/ig; // Change this line
let result =quoteSamplee.match(myRegexz); // Change this line
console.log(result)
// simple calculator using switch case statement
// 4 variables two nums one for the operand and
//one for the variable of the outcome 
//it should be done in five minutes
const numeroUno = 2;
const numeroDos = 7;
let answerr;
 var operand = prompt("-");
switch (operand){
case "+": 
answerr = numeroDos + numeroUno;
break;
case "-" :
answerr = numeroDos - numeroUno;
break;
case "/" : 
answerr = numeroDos / numeroUno;
break;
case "*":
answerr = numeroDos * numeroUno;
break;
case "%":
answerr = numeroDos % numeroUno;
default : 
answerr = "Not Aplicable";
}
console.log(`The result of Your Operation is  ${answerr}`)
// creating Write a program that takes a number (1-7) as input and 
// displays the corresponding day of the week (e.g., 1 for "Sunday," 2 for "Monday," etc.).

const dayNum  = (6); 
let dayName;
switch(dayNum){
case 1 :
dayName = "Sunday"
break;
case 2 : 
dayName = "Monday"
break;
case 3 :
dayName = "Tuesday"
break;
case 4 : 
dayName = "Wednesday"
break;
case 5 :
dayName = "Thursday"
break;
case 6 :
dayName = "Friday"
break;
case 7:
dayName = "Saturday";
break;
default:
dayName = "Not Allowed";
}
console.log(`The day of the week is ${dayName}`);
//Simulate a traffic light with three states (red, yellow, green) and print the
// color of the light when a number (1-3) is input.
// we will need two variable colorLight and numero
var numero = 1;
var resultant ;
switch(numero){
case 1 :
resultant = "Red";
break;
case 2 :
resultant = "Yellow";
break;
case 3 :
resultant = "Green";
break;
default :
resultant = "Not Allowed Here";
};
console.log(`The color is ${resultant}`);
// adding a method that converts a string to array
// it is the Array.from method 
myString = "I dont like money";
myArray = Array.from(myString);
console.log(myArray)// this will give out an arrayof all the values be it space comma etc
// now i can also make the opposite of the above and make an array a string lol
// this can be achieved using the .join method
var herArray = [1,2,3,4,5,6,7,8,9,0]
var itsString = herArray.join(_) // here i use underscore to separate the characters
// convert string into Number
var str = "000707"
const num = parseInt(str)
console.log(num)// this will output the number 707
// the typeof method returns the type of data of a js variable
// the typeof operator is used to determinea the data type of a certain object
const myObjj = {name : "brian" , locational : "kicukiro"};
console.log(typeof myObjj); //  this will return object 
// we can use Math.max and Math.min to know the biggest num and smallest in an array respectively
const itsArray = [1,2,3,4,5,6,7,8,8,9]
const maxNom = Math.max(...itsArray)
const minNom = Math.min(...itsArray)
console.log("the numbers are", maxNom + minNom)
// do i remember to write the simple calculator that operates between two
// two numbers lets see
// two num vars must return output of operations

const num1 = 4;
const num2 = 6;
var operand = prompt("-");
var outPut;
switch (operand){
    case "+" : 
    outPut = num1 + num2;
    break;
    case "-" :
    outPut = num2 - num1
    break;
    case "/" :
    outPut = num2/num1
    break;
    case "*" :
    outPut = num2 * num1
    break;
    default:
    outPut = "Not included here bro"
}
console.log(outPut)

// recaps on arrow functions
const greet = (/*param*/) =>{
    console.log("Hello World")
}
const addiTion = (a,b,c) => {
    return (a + b + c)
}
console.log((addiTion(1,2,3)))
greet();