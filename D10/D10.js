// //JS EXERCISES

//         21) Given variable x = "John" and y = "Doe", write on the console log "John <> Doe"
let x = "John";
let y = "Doe";
console.log(x + "<>" + y);

//         22) Create an object with properties such name, surname, email
const me = [{name:"Thanh", surname: "Nguyen", email: "npxthanh@gmail.com"}];
//         23) Delete Email from the previously created object
console.log(me.pop());
//         24) Create an array with 10 strings in it
const stringArray = ["str1","str2","str3","str4","str5","str6","str7","str8","str9","str10"] 
//         25) Print in the console every string in the previous array
for (let i = 0; i < stringArray.length; i++) {
    let element = stringArray[i];
    console.log(element);
}
//         26) Create an array with 100 random numbers in it
let n=100;
const arrayRandom=  Array.from({length: n}, (v, k) => Math.floor(Math.random()*n));

//         27) Wrote a function to get the MAX and the MIN from the previously created array
const minMax = function() {
    min = Math.min(arrayRandom);
    max = Math.max(arrayRandom);
    console.log(min);
    console.log(max);
}
//         28) Create an array of arrays, in which every array has 10 random numbers
var number = [1,2,3,4,5,6,7,8,9]
var arr1 = number[Math.floor(number.length * Math.random())];
var arr2 = number[Math.floor(number.length * Math.random())];
var arrayArray = arr1.concat(arr2);
//         29) Create a function that gets 2 arrays and returns the longest one
const twoArrays = function(array1, array2) {
    array1 = [];
    array2 = [];
    if (array1.length > array2.lenght) {
        console.log(array1);
    } else {
        console.log(array2);
    }
}
//         30) Create a function that gets 2 arrays of numbers and returns the one with the higher sum of values
const twoNumberArrays = function(array3, array4) {
    array3 = int[];
    array4 = int[];
    if (sum(array3) > sum(array(4))) {
        console.log(array3);
    } else {
        console.log(array4)
    }
}
