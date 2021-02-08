/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- The solution must be pushed to the repository and be available for the tutors by the end of the day
- You can ask for tutor's help
- You can google / use StackOverflow BUT we suggest you to use just the material provided
*/

/* EXERCISE 1
Write a function "area" which receives 2 parameters (l1,l2) and calculates the area of the associated rectangle.
*/
// const area = function(l1, l2) {
//     console.log("The area of the associated rectangle is");
//     return l1 * l2
// };
// area(3, 4)

/* EXERCISE 2
Write a function "crazySum" which receives two integers. It should return the sum of those two values, but if the two values are the same then it should return their sum multiplied by 3.
*/
// const crazySum = function(a, b) {
//     a = int
//     b = int
//     if (a != b) {
//         return sum(a, b);
//     } else {
//         if (a == b) {
//             return sum(a, b) * 3;
//         }
//     }
    
// };

/* EXERCISE 3
Write a function "crazyDiff" that computes the absolute difference between a given number and 19. 
It should return triple their absolute difference if the given number is greater than 19.
*/
// const crazyDiff = function(number) {
//     if (number > 19) {
//         return Math.abs(number) * 3;
//     } else () {
//         return number;
//     }  
// };

/* EXERCISE 4
Write a function "boundary" which accept an integer n and returns true if n is within 20 and 100 (included) or if it's equal to 400.
*/

/* WRITE YOUR CODE HERE */
// const boundary = function(n) {
//     n = integer
//     if (n >= 20 && n <= 100 || n == 400) {
//         return TRUE;
//     }
// };

/* EXERCISE 5
Write a function "strivify" which accepts a string.
It should add the word "Strive" in front of the given string, but if the given string already begins with "Strive", then it should just return the original string.
*/

/* WRITE YOUR CODE HERE */
// const strivify = function(string) {
//     if (string === "Strive") {
//         return string;
//     } else {
//         console.log("Strive" + string);
// };

/* EXERCISE 6
Write a function "check3and7" which accepts a positive number and check if it is a multiple of 3 or a multiple of 7.
HINT: Module Operator
*/

/* WRITE YOUR CODE HERE */
// const check3and7 = function(x) {
//     x > 0
//     if (x%3 == 0 || x%7 == 0) {
//         return TRUE;
//     }
// }

/* EXERCISE 7
Write a function "reverseString" to programmatically reverse a given string (es.: Strive => evirtS).
*/

/* WRITE YOUR CODE HERE */
// const reverseString = function(stringinput) {
//   char[] in = stringinput.toCharArray();
//     int begin=0;
//     int end=in.length-1;
//     char temp;
//     while(end>begin){
//         temp = in[begin];
//         in[begin]=in[end];
//         in[end] = temp;
//         end--;
//         begin++;
//     }
//     return new String(in);
// }  

// const reverseString = function(stringinput) {
//     return.stringinput.split("").reserve().join("");
// }

/* EXERCISE 8
Write a function "upperFirst" to capitalize the first letter of each word of a given string passed as a parameter.
*/

/* WRITE YOUR CODE HERE */
// const upperFirst = function(sttring8) {
//     return sttring8.charAt(0).toUpperCase() + sttring8.slice(1);
// }
/* EXERCISE 9
Write a function "cutString" to create a new string without the first and last character of a given string.
*/

/* WRITE YOUR CODE HERE */
// const cutString = function(sttring9) {
//     return sttring9.substring(1, sttring9.length - 1);
// }
/* EXERCISE 10
Write a function "giveMeRandom" which accepts a number n and returns an array containing n random numbers between 0 and 10.
*/

/* WRITE YOUR CODE HERE */
// const giveMeRandom = function(x) {
//     System.out.println("please enter a integer 'n' ");
//     int x= input.nextInt();
//     int[] x = { 1, 2, 3, 4, 5, 6, 7, 8, 9, 10};
// }
/* WHEN YOU ARE FINISHED
Commit and push the code to your personal GitHub repository and share the link to your commit in Eduflow.
*/