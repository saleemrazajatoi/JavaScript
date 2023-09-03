// <-------------------------------chapter 17 to 20--------------------------->

// task no 1
// var empty_2d_array=[[]];

// // task no 2

// var a = [
//     [0, 1, 2, 3],
//     [1, 0, 1, 2],
//     [2, 1, 0, 1]
//   ];

//   for (var i = 0; i < a.length; i++) {
//     for (var j = 0; j < a[i].length; j++) {
//       document.write(a[i] + " ");
//     }
//     document.write("<br>");

// }

// // task no 3

// for (var i = 1; i <= 10; i++) {
//     document.write(i +"<br>");
//   }

// task no 4

// Take input from the user for the table number and length
// var tableNumber = prompt("Enter the table number:");
// var tableLength = prompt("Enter the length of the table:");

// // Print the multiplication table using a for loop
// document.write("Multiplication Table of " + tableNumber + "<br>");

// for (var i = 1; i <= tableLength; i++) {
//   var result = tableNumber * i;
//   document.write(tableNumber + " x " + i + " = " + result + "<br>");
// }

// task no 5

//  var fruits = ['Apple', 'Banana' ,'Mango', 'Orange','Strawberry']
//  for( i = 0 ; i <fruits.length ; i++){

//      document.write("element at index "+i+" at "+"<b>"+fruits[i] + "</b> <br>")

//  }

//  task no 5

// a

// document.write("<h2>Counting</h2>");
// for(var i = 1 ; i <= 15 ; i++){
//     document.write([i]+",");
// }

// // b

// document.write("<h2>Reverse</h2>");
// for(var i = 15 ; i >= 1 ; i--){
//     document.write([i+" "]);
// }

// // c

// document.write("<h2>Even</h2>");
// for(var i = 1 ; i <= 20 ; i++){
//     if (i%2==0){
//     document.write(i+" ");}
// }

// // d

// document.write("<h2>Odd</h2>");
// for(var i = 1 ; i <= 20 ; i++){
//     if (i%2==1){
//     document.write(i+" ");}
// }

// // e

// document.write("<h2>Series</h2>");
// for(var i = 1 ; i <= 20 ; i++){
//     if (i%2==0){
//         document.write(i + "k"+ " " );}
//     }

// task no 7

// var b=prompt("Welcome to ABC bakery.what do you want to order sir/ma'am")
// var a = ["cake", "apple pie", "cookie", "chips", "patties"];

// for(var i = 0 ; i < 1 ; i++){
// if(b==="cake"){
//     document.write(" is avialable at index no "+(0+i));
// }
// else if(b==="apple pie"){
//     document.write(" is avialable at index no "+(1+i));
// }
// else if(b==="cookie"){
//     document.write(" is avialable at index no "+(2+i));
// }
// else if(b==="chips"){
//     document.write(" is avialable at index no "+(3+i));
// }
// else if(b==="patties"){
//     document.write(" is avialable at index no "+(4+i));
// }
// else{
//     document.write(" is not avaiable in our store ")
// }

// }

// task no 8

// var a= [24, 53, 78, 91, 12,];

// var  largest = a[0];

// for (var i = 0; i < a.length; i++) {

//     if (a[i] > largest) {
//         largest = a[i];
//     }
// }

// document.write("The largest number in the array is:"+ " " +largest);

// task no 9

// var a= [24, 53, 78, 91, 12,];

// var  largest = a[0];

// for (var i = 0; i < a.length; i++) {

//     if (a[i] < largest) {
//         largest = a[i];
//     }
// }

// document.write("The largest number in the array is:"+ " " +largest);

// task no 10

// for (var  i = 1; i <= 100; i++) {
//     if (i % 5 === 0) {
//         document.write(" "+ i);
//     }
// }

// <------------------------------Chapter no 21 to 25------------------------------>

// task no 1

// var firstName=prompt("Enter your First name ");
// var lastName =prompt("Enter your Last name") ;

// var fullName= firstName + "  " + lastName;

// document.write("jani <b>"+ " "+ fullName +"  "+ "</b> Welcome!")

// task no 2

// var  favoriteMobileModel = prompt("Please enter your favorite mobile phone model:");

// var  lengthOfmobile = favoriteMobileModel.length;

// document.write("The length of your input is: " + lengthOfmobile);

// task no 3

// var  word = "Pakistani";
// var  indexOf = word.indexOf("i");

//  document.write ("The index of "+" " + "n" + " "+ "in"+ " " + word +" "+"is :"+ " " + indexOf  )

// task no 4

// var  word = "Hello World ";
// var  lastIndex = word.lastIndexOf("l");

//  document.write ("The index of "+" " + "1" + " "+ "in"+ " " + word +" "+"is :"+ " " + lastIndex  )

// task no 5

// --------------------------with out logic-----------------------

// var  word = "Pakistani";
// var  thirdIndexCharacter = word[3];

// document.write("The character at the 3rd index in "+" "+ word +" " +" is:"+ " "+ thirdIndexCharacter);

// ------------------------------------logic---------------------------->

// var  word = "Pakistani";
// var Index = 5;

// if (Index >= 0 && Index < word.length) {
//     var  character = word[Index];
//     document.write("The character at index"+" "+ Index +" "+"in" +" "+ word + "is:" +" "+ character);
// } else {
//     document.write("Invalid index for" + " " + word);
// }

// task no 6

// Repeat Q1 using string  concat () method.

// var firstName ="Saleem";
// var lastName  = "Raza";

// var fullName = firstName.concat(" ", lastName);

// // var fullName= firstName + "  " + lastName;

// document.write("Hello, " + fullName + "! Welcome!");

// task no 7

//   var text=("Hyderabad", "Islamabad")

// var newText = text.replace("Hyderabad","Islamabad");

// document.write(text);

// task no 8

// var a = "Ali and Sami are best friends. They play cricket and football together"

// var message = a.replace(/and/g ,"&")

// document.write(message + " ")

// task no 9

// var str = "12";
// var num = Number(str);

// // Display the values and types in the browser
// document.write("Original String: " + str + "<br>");
// document.write("Converted Number:" + num + "<br>");
// document.write("Type of Original String: " + typeof str + "<br>");
// document.write("Type of Converted Number: " + typeof num + "<br>");

// task no 10

// var a = prompt("Enter your name")
// var b = a.toUpperCase("peanuts")

// document.write( "User input :" + "" + a + "<br>")
// document.write( "Upper case :" + " " +b)

// task no 11

// var a = prompt("Enter your name")
// var b =("Javasript")

// document.write( "User input :" + "" + a + "<br>")
// document.write( "Title case :" + " " +b)

// task no 12

// var num = "35.36" ;
// var numString = num.replace(".", "");

// document.write("Number : " + " " + num + "<br>")
// document.write("Result : " + " " + numString);


// task no 13--

// var username = prompt("Enter your username:");

// var specialSymbols = ["@", ".", ",", "!"];
// for (var i = 0; i < username.length; i++) {
//   if (specialSymbols.includes(username[i])) {
//     alert("Please enter a valid username without special symbols (@, ., , or !)."
//     );
//   }
// }
// alert("Valid userName");


// task no 14


// A = ["cake", "apple pie", "cookie", "chips", "patties"];
// var username = prompt("Enter your username:");
// flag = true;
// for (var i = 0; i < A.length; i++) {
//   if (username == A[i]) {
//     document.write(A[i]+)
//     ;
//     flag = false;
//     break;
//   }
// }
// if (flag)
// document.write("not found");




// task no 15





// task no 16

// var university ="University of Karachi";

// for(var i = 0 ; i <university.length ; i++){

// document.write(university[i] + "<br> ")

// }



// task no 17

// var userInput = prompt("Enter a string:");
// var lastCharacter = userInput.slice(-1);

// document.write("User input: " + userInput);
// document.write("The last character is: " + lastCharacter);


// task no 18



// Input string
// var a = "The quick brown fox jumps over the lazy dog";

// var lowerCaseInput = a.toLowerCase();

// var words = lowerCaseInput.split(" ");

// var count = 0;

// for (var i = 0; i < words.length; i++) {

//   if (words[i] === "the") {

//     count++;
//   }
// }
// document.write("<h2> The word the appears "+count+ "times in the given string</h2>");










