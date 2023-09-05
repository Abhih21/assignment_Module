/* Q1.Create a javascript file, using javascript comments, List all the datatypes of Javascript, and specify an
example for each of them.
Ans:The Following are the data types of JavaScript:

1. String
2. Number
3. Bigint
4. Boolean
5. Undefined
6. NUll
7. Symbol
8. Object

EXAMPLE:

1. String: "I am happy to join PW Skills FSWD Course"

2.Number:
 
i) Integer: 9
ii) Floating value: 10.5
iii) Infinity; Number.POSITIVE_INFINITY,Number.NEGATIVE_INFINITY
iv) Not a Number: NaN

3.BigInt: 1024n

4.Boolean: true ,false

5.Undefined: undefined

6.Null: null

7.Symbol: Symbol('PW Skills')

8.Objects:
i) Array: [1,2,3]
ii) Object:{name:"Pw Skills", course:"FSWD"}
*/



/* Q2.Create an array of 10 products that you have recently purchased or viewed on an e-commerce site.

Ans. 

let arr = ["iPhone", "Macbook Pro", "Flower Pot","Water Bottle" ,"Bag" , "Watch", "Ball", "Mouse Pad","Lens", "keyboard"];
*/


/* Q3.Create an object of a student registry of 5 students whose key is the registration number and the value is
the student name. Registration number starts from 1 and continues.

Ans. 

let obj = { 1:"Mithun", "Alka","Anurag", "Prabir","Shivam",};
*/

/* Q4.Variables and typeof
1. Specify an example for all the datatypes in Javascript, store the values in a variable, and verify the type of
value stored.*/
//Ans: 1. String
    let var1 = "I am happy to join PW Skills FSWD Course";
    console.log(typeof var1);

    //2.Number:-

    //i) Integer:
    let var2 = 9;
    console.log(typeof var2)

    //ii) Flosting value:
    let var3 = 10.2
    console.log(typeof var3);

    //iii) Infinity 
    let var4 = Number.POSITIVE_INFINITY;
    console.log(typeof var4);

    //iv) not a Number:
    let var5 = NaN;
    console.log(typeof var5)

 //   3. Bigint:

    let var6 = 1024n;
    console.log(typeof var6);

    // 4. Boolean:

    let var7 = true;
    console.log(typeof var7);

//  5. Undefined:

        let var8 = undefined;
        console.log(typeof var8)

//  6. Null:

        let var9 =null;
        console.log(var9);

//   7. Symbol:

        let var10 = Symbol("PW Skills");
        console.log(typeof var10);

//    8.Objects:-

       // i) Array:

       let var12 =[1,2,"Pw"];
       console.log(typeof var12);

       //ii) Object:

        let var13 = {name: "PW Skills", course: "FSWD"};
        console.log(typeof var13);



       /* Q5. Create 2 valid variables and 2 invalid variables and print them onto the console. Comment the results and
error messages.*/

//Ans:
    
    //Valid variables

    let name1 = "PW Skills";
    console.log(name1);   // Output: PW Skills
    let iAmHappy = true;
    console.log(iAmHappy);  //Output: true


    // Invalid Variables

 /*  let 1name = "PW Skills"
    console.log(1name);     //Output: SyntaxError: Invalid or unexpected token
    let var = 13
    console.log(var);       //Output: syntaxError: Unexpected token 'var'; */



    // Operators
 /* Q6. Write a program that prints the multiplication table in the textbook format of any number specified.*/

 //Ans.

    let number = 6;


    console.log(`${number * 1} = ${number * 1}`);
    console.log(`${number * 2} = ${number * 2}`);
    console.log(`${number * 3} = ${number * 3}`);
    console.log(`${number * 4} = ${number * 4}`);
    console.log(`${number * 5} = ${number * 5}`);
    console.log(`${number * 6} = ${number * 6}`);
    console.log(`${number * 7} = ${number * 7}`);
    console.log(`${number * 8} = ${number * 8}`);
    console.log(`${number * 9} = ${number * 9}`);
    console.log(`${number * 10} = ${number * 10}`);


    /*

    OUTPUT:

    6 * 1 =6
    6 * 2 =12
    6 * 3 =18
    6 * 4 =24
    6 * 5 =30
    6 * 6 =36
    6 * 7 =42
    6 * 8 =48
    6 * 9 =54
    6 * 10 =60

    */



 /* Q7.Write a program to perform all the arithmetic operations[except increment and decrement operators] of
javascript of any two numbers stored in the variables num1 and num2. Also, print the results to the console.

*/
//Ans:

let num1 = 10;
let num2 = 8;

// Addition (+): Adds two values together.
console.log(`The addition of num1 and num2 is ${num1 + num2}`);

//subtraction (-): Subtracts one value from another.
console.log(`The substraction of num1 and num2 is ${num1 - num2 }`);

// Multiplication (*): Multiplies two values together.
console.log(`The Multiplication  of num1 and num2 is ${num1 * num2 }`);

//Division (/): Divides one value by another.
console.log(`The division of num1 and num2 is ${num1 / num2 }`);

//Modulus (%): Returns the remainder of a division operation.
console.log(`The result of modulo operation of num1 and num2 is ${num1 % num2 }`);

//Exponentiation(**): raises to the power of.
console.log(`The exponential of num1 and num2 is ${num1 **  num2 }`);

/*

Output:

The addition of num1 and num2 is 18
The substraction of num1 and num2 is 2
The Multiplication  of num1 and num2 is 80
The division of num1 and num2 is 1.25
The result of modulo operation of num1 and num2 is 2
The exponential of num1 and num2 is 100000000

*/



/* Q8. Write a program to find out the perimeter of a rectangle. Print the result to the console.
*/

//Ans:

let length = 10;
let width = 20;

let perimeterOfRectangle = 2 * (length + width);

console.log(`The perimeter of the rectangle with length: ${length} and width: ${width} is ${perimeterOfRectangle}`);


/*
Output:
The perimeter of the rectangle with length: 10 and width:20 is 60
*/



/*Q. Write a program to demonstrate the results of comparison operators. Note that both the truth and false
condition for each operator must be specified.
*/

//Equal
let num3 = 12;
let num4 = 12;

console.log(num3 == num4);   //true

let num5 = 12;
let num6 = 10;

console.log(num5 == num6);   //false

//Not Equal
let num7 = 12;
let num8 =12;

console.log(num7 != num8 );     //false


let num9 = 12;
let num10 =10;

console.log(num9 != num10 );     //True


//Strictly Equal
let num11 = 12;
let num12 =12;

console.log(num11 === num12 );     //True

let num13 = 12;
let num14 ="12";

console.log(num13 === num14 );      //False


//Strictly Not Equal
let num15 = 12;
let num16 = 12;

console.log(num15 !== num16 );     //False



let num17 = 12;
let num18 = "12";

console.log(num17 !== num18 );     //true

//Greater Then
let num19 = 13;
let num20 = 12;

console.log(num19 > num20 );     //true

let num21 = 10;
let num22 = 12;

console.log(num21 > num22 );     //False



//Greater Then or Equal to 
let num23 = 13;
let num24 = 12;

console.log(num23 >= num24 );     //true

let num25 = 10;
let num26 = 12;

console.log(num21 >= num22 );     //False



//Lesser Then
let num27 = 12;
let num28 = 13;

console.log(num27 < num28 );     //true

let num29 = 12;
let num30 = 10;

console.log(num29 < num30 );     //False



//Lesser Then or Equal to 
let num31 = 12;
let num32 = 10;

console.log(num31 <= num32 );     //true

let num33 = 12;
let num34 = 10;

console.log(num33 <= num34 );     //False



/*
What are Conditions, if, if-else, if-else-if
1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the
traffic light is red print the vehicles must stop.*/


//Ans.

let trafficlight = "Orange"

if(trafficlight == "red"){
    console.log("Vehicles must stop.");
}else if (trafficlight == "Orange"){
    console.log("Vehicles must wait. The signal is changing to red or green."); 
}else if (trafficlight == "green"){
    console.log("Vehicles may proceed with caution.");
}else {
    console.log("Invalid traffic Light");
}



//Q. Write a program to print the largest of 2 numbers.

//Ans. 

let number1 = 20;
let number2 = 15;

if(number1 > number2) {
    console.log("number1 is greater than number2");
} else {
    console.log("number2 is greater than number1");
}



/* Q. Write a program that takes a number as input and outputs "Fizz" if it is divisible by 3, "Buzz" if it is divisible
by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to
the numbers divisible by 3 or 5.*/

//Ans.

let num = 5;

if(num % 3 == 0 && num % 5 == 0){
    console.log("FizzBuzz");
}else if(num % 5 ==0){
    console.log("Buzz");
}else if (num % 3 == 0){
    console.log("Fizz")
}else{
    console.log("Invalid input");
}



//Switch Case
/* Q. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend.*/

//Ans. 

const day = "Tuesday";

let daysUntilWeekend;

switch (day) {
    case "Monday":
        console.log(`There are 6 day(s) until the weekend.`);
        break;
    case "Tuesday":
        console.log(`There are 5 day(s) until the weekend.`);
        break;
    case "Wednesday":
        console.log(`There are 4 day(s) until the weekend.`);
        break;
    case "Thursday":
        console.log(`There are 3 day(s) until the weekend.`);
        break;
    case "Friday":
        console.log(`There are 2 day(s) until the weekend.`);
        break;
    case "Saturday":
        console.log(`There are 1 day(s) until the weekend.`);
        break; 
    case "Sunday":
        console.log(`There are 0 day(s) until the weekend.`);
        break;     
    default:
        daysUntilWeekend = "Invalid day";
        break;   
}



/* Q. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the year.*/

//Ans. 

const monthNumber = 1;

switch (monthNumber) {
    case 1: 
    console.log("January");
    break;
    case 2: 
    console.log("February");
    break;
    case 3: 
    console.log("March");
    break;
    case 4: 
    console.log("April");
    break;
    case 5: 
    console.log("May");
    break; 
    case 6: 
    console.log("June");
    break; 
    case 7: 
    console.log("July");
    break;
    case 8: 
    console.log("August");
    break;
    case 9: 
    console.log("September");
    break; 
    case 10: 
    console.log("October");
    break;
    case 11: 
    console.log("November");
    break;
    case 12: 
    console.log("December");
    break;
    default:
        console.log("Invalid month number");
}




//Ternary Conditions
/* Q. Write a program that takes in a number and output whether it is positive,negative,or zero.*/

//Ans.

let NUmber = 0;
NUmber == 0
? console.log("The number is zero")
:number > 0
? console.log("The number is greater than zero")
: console.log("The number is lesser than zero");


/* Q. Create a program that takes in two numbers and prints the larger one.*/

//Ans.

let Number_1 =10;
let Number_2 = 10;

Number_1 == Number_2
? console.log("Both the number are equal.")
: Number_1 > Number_2
? console.log(`The larger number among the two number is ${Number_1}.`)
:console.log(`The larger numbe among the two numbers is ${Number_2}.`);




//Loops
 
/* Q Write a program that generates the multiplication table in the textbookformat for a given number.*/

//Ans.

let no = 5;
 for (let i =1;i <=10; i++) {
    console.log(`${no}* ${i} = ${num * i}`);
 }


 /*
 OUTPUT

 5*1=5
 5*2=10
 5*3=15
 5*4=20
 5*5=25
 5*6=30
 5*7=35
 5*8=40
 5*9=45
 5*10=50
 */



 /* Q. Write a program that prints all the positive even number till the number specified.*/

 //Ans.


 let numBer = 10;

 for(let i=1; i <= numBer; i++){
    if(i % 2 == 0){
        console.log(i);

    }
 }



 /*
 OUTPUT:
 2 
 4
 6
 8
 10
 */

