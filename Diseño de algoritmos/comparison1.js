/* Exercise #1
 * Create a function that takes in one number
 * and checks if the number is greater than  10. Print out to the console true if it is greater and false otherwise. */

let num=parseInt(prompt("Introduce un número"));
if(num>=10){
    console.log("TRUE");
} else{
    console.log("FALSE");
}

/**
 * Exercise #2
 * Create a function that takes in one number
 * and checks if it is divisible by 4 or divisible by 9. 
 * Print out to the console true if a number
 * if divisible by 4 or 9, and false if a
 * number is not divisible by either number.
 */

let number=parseInt(prompt("numero"));
let residuoo=num%4;
let residuo2=num%9;
if (residuo==0 || residuo2==0){
    console.log(true);
} else {
    console.log(false)
}