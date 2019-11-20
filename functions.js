//  JS Functions
// Challenge 1
// Let's go back to our naughts and crosses board. Create a function that takes 9 parameters 
// and logs our naughts and crosses board to the console.
// --------------------------------------------------------------------------------------------------------------------

const userMoves = (space1,space2,space3,space4,space5,space6,space7,space8,space9)=>{
console.log("  |   |");
console.log(`${space1} | ${space2}  |${space3}`);
console.log("  |    |  ");
console.log(" ---------  ");
console.log("  |    |  ");
console.log(`${space4} |${space5}   |${space6} `);
console.log("  |    |  ");

console.log(" ---------  ");
console.log("  |    |  ");
console.log(`${space7} |${space8}   |${space9}  `);
console.log("  |    |  ");
}
userMoves("x","x","x"," ","0","","0","","0")

// -------------------------------------------------------------------------------------------------------------------
// Challenge 2:
// Create a function that takes a number as a parameter and converts it to a string.
// -------------------------------------------------------------------------------------------------------------------
let a = 223423540

console.log(typeof(a.toString())); 

// -------------------------------------------------------------------------------------------------------------------
// Challenge 3:
// Create a function that takes a number as a parameter and adds one.
// ---------------------------------------------------------------------------------------------------------------------
let num1=3
function myFunction (num1) {
    num1=num1 + 1
    return num1++
}
console.log(myFunction(num1))

// --------------------------------------------------------------------------------------------------------------------
// Challenge 4:
// Create a function that takes a number as a parameter and takes one off.
// --------------------------------------------------------------------------------------------------------------------
let num1=3
function myFunction (num1) {
    num1=num1 - 1
    return num1--
}
console.log(myFunction(num1))

// -------------------------------------------------------------------------------------------------------------------
// Challenge 5:
// Create a function that takes two numbers as a parameters and adds them together.
// -------------------------------------------------------------------------------------------------------------------
let num1 = 3
let num2 = 5
function myFunction() {
    return num1 + num2
}
console.log(myFunction())
// --------------------------------------------------------------------------------------------------------------------
// Challenge 6:
// Create a function that takes two numbers as a parameters and takes the second one away from the first one.
// --------------------------------------------------------------------------------------------------------------------

function myFunction(num1,num2){
    return num1 -num2
}
console.log(myFunction(4,8))

// --------------------------------------------------------------------------------------------------------------------
// Challenge 7:
// Create a function that takes two numbers as a parameters and multiplies them together.
// --------------------------------------------------------------------------------------------------------------------
function myFunction(num1,num2){
    return num1 *num2
}
console.log(myFunction(4,8))
// --------------------------------------------------------------------------------------------------------------------
// Challenge 8:
//  Create a function that takes two numbers as a parameters and divides the first one by the second one.
// --------------------------------------------------------------------------------------------------------------------
function myFunction(num1,num2){
    return num1/num2
}
console.log(myFunction(4,8))
// --------------------------------------------------------------------------------------------------------------------
// Challenge 9:
// Create a function that takes a number as a parameter and multiplies it by itself.
// --------------------------------------------------------------------------------------------------------------------
function square(number) {
    return number * number;
  }
console.log(square(4))

// --------------------------------------------------------------------------------------------------------------------
// Challenge 10:
// Create a function that takes two numbers and an operator as parameters. It should return a print out of the sum
// e.g. “1 + 2 = 3” or “4 x 6 = 24”.
// --------------------------------------------------------------------------------------------------------------------
console.log(eval('2 + 2'));

// -------------------------------------------------------------------------------------------------------------------
// Challenge 11:
// Create a function that takes two numbers as a parameters and checks if the first one is greater than the second one.
// --------------------------------------------------------------------------------------------------------------------
function myFunction(num1,num2){
    if (num1 > num2){
        console.log("nunber is greater than the other")
    }
    else  {
        console.log("number 1 is not greater then number 2")
    }
}
myFunction(23,8)

// --------------------------------------------------------------------------------------------------------------------
// Challenge 12:
// Create a function that takes two numbers as a parameters and checks if the first one is less than the second one.
// --------------------------------------------------------------------------------------------------------------------
function myFunction( num1,num2){
    if (num1<num2){
        console.log ("number 1 is less then number 2")
    }
    else {
        console.log (" number 1 is not less then number 2")
    }
}
myFunction(123,10)

// --------------------------------------------------------------------------------------------------------------------
// Challenge 13:
// Create a function that takes two numbers as a parameters and checks if they are equal.
// --------------------------------------------------------------------------------------------------------------------
function myFunction( num1, num2){
    if (num1 == num2 ){
        console.log("both numbers are equal to each other")
    }
    else{
        console.log("numbers are not equal to each other")
    }
}
myFunction(123,13)
// --------------------------------------------------------------------------------------------------------------------
// Challenge 14:
// Create a function that takes two numbers as a parameters and returns the smaller of the two numbers.
// --------------------------------------------------------------------------------------------------------------------
function myFunction( num1, num2){
        if (num1 < num2 ){
            console.log(num1)
        }
        else if (num1 > num2 ){
            console.log(num2)
        }
    }
    myFunction(123,13234)
// --------------------------------------------------------------------------------------------------------------------
// Challenge 15:
//  Create a function that takes two numbers as a parameters and returns the larger of the two numbers.
// --------------------------------------------------------------------------------------------------------------------
function myFunction( num1, num2){
            if (num1 > num2 ){
                console.log(num1)
            }
            else if (num1 < num2 ){
                console.log(num2)
            }
        }
        myFunction(123,13234)
// --------------------------------------------------------------------------------------------------------------------
// Challenge 16:
// Create a function that takes a number as a parameter and checks if it is even.
// --------------------------------------------------------------------------------------------------------------------
function myFunction( num1){
            if (num1 % 2 == 0 ){
                console.log(" yes! its an even")
            }
            else {
                console.log("its an odd")
            }
        }
        myFunction(12)
// --------------------------------------------------------------------------------------------------------------------
// Challenge 17:
// Create a function that takes a number as a parameter and checks if it is odd.
// --------------------------------------------------------------------------------------------------------------------
function myFunction( num1){
            if (num1 % 2 != 0 ){
                console.log(" yes! its an odd")
            }
            else {
                console.log("oh no its an even")
            }
        }
        myFunction(17)
// --------------------------------------------------------------------------------------------------------------------
// Challenge 18:
// Create a function that takes a number between 0 and 100 and returns a grade based on this system
// "A": 90-100% "B": 80-89% "C": 70-79% "D": 60-69% "F": 0-59%.
// --------------------------------------------------------------------------------------------------------------------
function myFunction( num1){
                if (num1 < 59 ){
                    console.log(" F ")
                }
                else if (num1 < 69 ) {
                    console.log("D")
                }
                else if (num1 < 79 ) {
                    console.log("C")
                }
                else if (num1 < 89 ) {
                    console.log("B")        
                }
                else {
                    console.log("A")
                }
            }
            myFunction(97)
    
// --------------------------------------------------------------------------------------------------------------------
// Challenge 19:
// Create a function that takes two strings as a parameters and returns the strings concatenated.
// --------------------------------------------------------------------------------------------------------------------
var str1 = 'Hello';
var str2 = 'World';
 
console.log(str1.concat(' ', str2));
// expected output: "Hello World"

console.log(str2.concat(', ', str1));
// expected output: "World, Hello"

// --------------------------------------------------------------------------------------------------------------------
// Challenge 20:
// Create a function that takes a string as a parameter and counts the number of vowels in it and returns the result.
// -------------------------------------------------------------------------------------------------------------------
function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}
console.log(vowel_count("The quickuib fox"));