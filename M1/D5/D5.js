/*
    ASSIGNMENT RULES
    - All the answers must be in JavaScript
    - The solution must be pushed to the repository and be available for the tutors by the end of the day
    - You can ask for tutor's help
    - You can google / use StackOverflow BUT we suggest you to use just the material provided
    - You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
    - Complete as many exercise that you can
    - Publish them into your own GitHub account and upload repository link on Eduflow before 16.30 (Berlin Time) 
*/

//JS Basics

/* Ex.A
   Create a variable test that contains a string.
*/
// let test = "string";
// console.log(test);

/* Ex.B
    Create a variable sum that contains the result of the sum between 10 and 20.
*/
// let sum = 10 + 20;
// console.log(sum);


/* Ex.C 
    Create a variable random that contains a random number between 0 and 20 (should be randomly created at each execution).
*/
// let random = Math.random(0,20);
// console.log(random);

/* Ex.D
    Create a variable me containing and object with the current information: name = your name, surname = your surname, age = your age.
*/
// var me = {"name": "Thanh", "surname": "Nguyen", "age": 29};
// console.log(me);
/* Ex.E 
    Programmatically remove the age property from the previously create object.
*/
// var me = {"name": "Thanh", "surname": "Nguyen", "age": 29};
// delete me.age;
// console.log(me);
/* Ex.F 
   Programmatically add to the object me an array "skills" that contains the programming languages that you know.
*/
// let me = [{"name": "Thanh", "surname": "Nguyen", "age": 29}].concat({"skills": ["Python", "R", "Java"]});
// me.skills = ['JavaScript', 'Python'] ;// peers
// console.log(me);
/* Ex.G 
   Programmatically remove the last skill from the array "skills" inside of the "me" object.
*/
// me.skills.pop();
// console.log(me);
// JS Functions
/* Ex.1
    Write the function dice that randomize an integer number between 1 and 6.
*/
// const dice = function() {
//     return Math.random(1,6);
// };

// from peers
// const dice = function() {
//   return Math.floor(Math.random() * 6 + 1);
// }
// console.log(dice());


/* Ex.2 
    Write the function whoIsBigger that receives 2 numbers and returns the bigger of the two.
*/
// const whoIsBigger = function(num1, num2) {
//     if (num1 > num2) {
//         return num1;
//     } else {
//         return num2;
//     }
// }

// from peers
// const whoIsBigger = function(x, y) {
//   return (x > y) ? x : y;
// }
/* Ex.3
    Write the function splitMe that receives a string and returns an array with every word in that string.
    Ex. splitMe("I love coding") => returns [ "I","Love","Coding"]
*/
// const splitMe = function(string3) {
//     return Array(string3);
// }


// from peers
// const splitMe = function(str) {
//   return str.split(" ");
// }
// console.log(splitMe('I Love Coding'));

/* Ex.4
    Write the function deleteOne that receives a string and a boolean. If the boolean is true it should return the string without the first letter, otherwise it should remove the last one.
*/
// const deleteOne(str, boo) {
//     str = String;
//     boo = Boolean;
//     if (boo = True) {
//         return str.splice(0,1);
//     } else {
//         return str.splice(0,-1);
//     }
// }

//peers
// const deleteOne = function (str, bool) {
//   return (bool === true) ? str.substring(1) : str.substring(0, str.length - 1)
// }
// console.log(deleteOne("Strive", true));


/* Ex.5
   Write the function onlyLetters that receives a string, removes all the numbers and returns it.
   Ex.: onlyLetters("I love 123 whatever")  => returns "I love whatever"
*/
// const onlyLetters = function(str5) => {
//     str5 = string;
//     str5rev = str5.replace.replace('REGEX', '');
//     return str5rev;
// }


// }
/* Ex.6 
   Write the function isThisAnEmail that receives a string and returns true if the string is a valid email.
*/
// const isThisAnEmail = function(str6) {
//     str6 = string;
//     if (str6.test(email) == true) {
//         retrun true;
//     }
// }
/* Ex.7
   Write the function whatDayIsIt that should return the current day of the week.
*/
// const whatDayIsIt = function(date) {
//     date = DayOfWeek.from(localDate);
//     return date;
// }
/* Ex.8
    Write the function rollTheDices that receives a numeric input.
    It should use the Dice function defined in Ex1 and return an object that contains both the sum of all values extracted and the single values of the dicerolls themselves.
    Example: RollTheDices(3) => returns {
        sum: 10
        values: [ 3, 3, 4]
    }
*/

/* Ex.9
   Write the function howManyDays that receives a date and returns the number of days that has passed since that day.
*/
// const howManyDays = function(date, numberofdays) {
//     date=new SimpleDateFormat("yyyyMMdd");
//     today = java.util.Calendar.getInstance().getTime();
//     numberofdays = date - today;
//     return numberofdays;
// }


function difference(date1, date2) {  
  const date1utc = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate());
  const date2utc = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate());
    day = 1000*60*60*24;
  return(date2utc - date1utc)/day
}
/* Ex.10
   Write the function isTodayMyBDay that returns true if it's your birthday, false otherwise.
*/
// const isTodayMyBDay(today) {
//     today = java.util.Calendar.getInstance().getTime();
//     if (today = "19911014") {
//         return True;
//     }
// }
// JS Arrays // Objs
// NOTE: movies array is defined at the end of the file!

/* Ex.11
   Write the function deleteProp that receives an object and a string, and returns the object after deleting the property with that given name.
*/
// const deleteProp = function(obj,str11) => {
//   delete obj.str1;
//   console.log(obj.str1);
// }


/* Ex.12 
    Write the function olderMovie that finds the older movie in the array.
*/
let olderMovie = function(a,b) {
  if(parseInt(a.year) < parseInt(b.year)){
    return a.year - b.year;
    }}
movies.sort(olderMovie);
console.log(movies);


/* Ex.14
    Write the function onlyTitles that creates an array with only the titles of the movies.
*/
const onlyTitles = (movies) => {
  const arr =[]
for(let i=0; i<movies.length; i++) {
 arr.push(movies[i].Title)
}
return arr
}
const result = onlyTitles(movies)
/* Ex.15
   Write the function onlyThisMillennium that returns only the movies produced in this millennium.
*/

/* Ex.16 
    Write the function getMovieById that receives an id and returns the movie with the given id.
*/

/* Ex.17
    Write the function sumYears that returns the sum of the years the movie has been produced.
*/

/* Ex.18
    Write the function searchMovie that receives a string and returns all the movies with that string in the title.
*/

/* Ex.19
    Write the function searchAndDivide that receives a string and returns an object with an array "match" with all the movies that contains the given string in the title, and another array "nonMatch" with all the other movies.
*/

/* Ex.20
   Write the function deleteX that receives a number and returns an array without the element in the given position.
*/

// [EXTRAS] JS Advanced

/* Ex.21
  Create a function halfTree that recives the height creates an "*" half tree with that height.
  Example:
  halfTree(3)
  *
  **
  ***
*/

/* Ex.22 
  Create a function tree that receives the height and creates an "*" tree with that height.
  Example: 
  tree(3)
    *  
   *** 
  *****
*/2
/* Ex.23
  Create a function isItPrime that receives a number and returns true if the number is a prime number.
*/

/* Movies array is an example array, used for the exs. Don't change it :)  */
const movies = [
    {
      Title: "The Lord of the Rings: The Fellowship of the Ring",
      Year: "2001",
      imdbID: "tt0120737",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Return of the King",
      Year: "2003",
      imdbID: "tt0167260",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings: The Two Towers",
      Year: "2002",
      imdbID: "tt0167261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
    },
    {
      Title: "Lord of War",
      Year: "2005",
      imdbID: "tt0399295",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "Lords of Dogtown",
      Year: "2005",
      imdbID: "tt0355702",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg",
    },
    {
      Title: "The Lord of the Rings",
      Year: "1978",
      imdbID: "tt0077869",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1990",
      imdbID: "tt0100054",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg",
    },
    {
      Title: "The Lords of Salem",
      Year: "2012",
      imdbID: "tt1731697",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg",
    },
    {
      Title: "Greystoke: The Legend of Tarzan, Lord of the Apes",
      Year: "1984",
      imdbID: "tt0087365",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg",
    },
    {
      Title: "Lord of the Flies",
      Year: "1963",
      imdbID: "tt0057261",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg",
    },
    {
      Title: "The Avengers",
      Year: "2012",
      imdbID: "tt0848228",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Infinity War",
      Year: "2018",
      imdbID: "tt4154756",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Age of Ultron",
      Year: "2015",
      imdbID: "tt2395427",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg",
    },
    {
      Title: "Avengers: Endgame",
      Year: "2019",
      imdbID: "tt4154796",
      Type: "movie",
      Poster:
        "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg",
    },
  ]

  // https://www.delftstack.com/howto/javascript/javascript-subtract-dates/
