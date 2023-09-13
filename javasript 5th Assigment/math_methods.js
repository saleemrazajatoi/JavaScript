// -------------------------Chapter 26 to 30------------------------------

// task no 1

// var num = 3.45214;
// document.write("<b> Number : </b>"+ " " + num +"<br>")

// var num = 3.45214;
// var scoreAvg = Math.round(num);
// document.write("<b>Round off value : </b>"+ " " + scoreAvg +"<br>")

// var num = 3.45214;
// var scoreAvg = Math.floor(num);
// document.write("<b>Floor value : </b>"+ " " + scoreAvg +"<br>")

// var num = 3.45214;
// var scoreAvg = Math.ceil(num);
// document.write("<b>Ceil value : </b>"+ " " + scoreAvg )

// // task no 2

// var num = -2.673;
// document.write( "<br><br><br><br>"+"<b> Number : </b>"+ " " + num +"<br>")

// var num = -2.673;
// var scoreAvg = Math.round(num);
// document.write("<b>Round off value : </b>"+ " " + scoreAvg +"<br>")

// var num = -2.673;
// var scoreAvg = Math.floor(num);
// document.write("<b>Floor value : </b>"+ " " + scoreAvg +"<br>")

// var num =-2.673;
// var scoreAvg = Math.ceil(num);
// document.write("<b>Ceil value : </b>"+ " " + scoreAvg )

// task no 3

// var input= prompt("Enter your entiger number");
// var storagre= Math.abs(input);

// document.write("The abslute value "+" " +"<b>"+ input +"</b>"+ " " + "is" + " "+ "<b>" +storagre+"</b>");

// task no 4


// var randoNumber= Math.floor(Math.random()*4+1);

// document.write("random dice value :" + " " + " " + randoNumber +"<br>");

// var randoNumber= Math.floor(Math.random()*6+1);

// document.write("random dice value :" + " " + " " + randoNumber +"<br>");


// task no 5

// var a= Math.floor(Math.random()*3);

// if(a==2){
//     document.write(a+"<br>Random coin value is: Heads<br> ")
    
// }
// else{
//     document.write(a+"<br>Random coin value is: tails ")
// }

// task no 6

// var a=Math.floor(Math.random()*100);
// document.write("Random Number between 1 to 100: "+a);

// task no 7

// var a=prompt("enter weight in kilograms");
// document.write("The weight of user is "+a+" Kilograms")

// task no 8


// var secretNumber = Math.floor(Math.random() * 10) + 1;

// var userInput = parseInt(prompt("Guess the secret number between 1 and 10:"));

// if (userInput === secretNumber) {
//   alert("Congratulations! You guessed the secret number!");
// } else {
//   alert("Sorry, the secret number was"+ secretNumber + ". Try again!");
// }


// ------------------------------------Chapter no  31 to 34------------------->

// task no 1

// var a=new Date();
// document.write(a);

// task no 2

// var monthNames =[
//     "January", "February", "March", "April",
//     "May", "June", "July", "August",
//     "September", "October", "November", "December"
//   ];

//   var currentDate= new Date();

//   var currentMonth=monthNames[currentDate.getMonth()];

//   alert(currentMonth);

// task no 3

// var  dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

// var currentDate= new Date();

// var curentDay = dayNames[currentDate.getDay()];

// alert(curentDay);

// task no 4

// var currentDate = new Date();


// var currentDay = currentDate.getDay()

// if (currentDay === 6 || currentDay === 0) {
//   alert("It's Fun day");
// } else {
//   alert("It's not Fun day");
// }

// task no 5

// var  currentDate = new Date();

// var  currentDay = currentDate.getDate();

// if (currentDay < 14) {
//   document.write("First fifteen days of the month");
// } else {
// document.write("Last days of the month");
// }

// task no 6

// var a=new Date();
// document.write("Current date: "+a);
// var b=a.getTime();
// document.write("<br>Elapsed miliseconds since january 1,1970: "+b);
// var c=a.getTime()/(60*60);
// document.write("<br>Elapsed minutes since january 1,1970: "+c);

// task no 7

// var currentDate = new Date();

// var currentHour = currentDate.getHours();

// if (currentHour < 12) {
//   alert("It's AM");
// } else {
//   alert("It's PM");
// }


// task no 8

// var a=new Date("dec 31,2020");
// document.write("Later date: "+a);


// task no 9

// var oldDate=new Date("june 18,2015");
// var oldTime=oldDate.getTime();

// var currentDate=new Date();
// var currenttime=currentDate.getTime();

// var pastDays=currenttime-oldTime;
// var totalDays=pastDays/(1000*60*60*24);

// var totalDays=totalDays.toFixed(0);

// document.write(totalDays+" Days passed since 1st Ramadan, 2015 ");


// task no 10

// var oldDate=new Date("dec 5,2015 22:50:16");
// var oldTime=oldDate.getTime();
// var currentDate=new Date();
// var currenttime=currentDate.getTime();
// var pastDays=currenttime-oldTime;
// var totalDays=pastDays/(1000);
// var totalDays=totalDays.toFixed(0);
// document.write(" on reference date "+oldDate);
// document.write("<br>"+totalDays+" Seconds passed since begining of  2015 ");


// task no 11

// var a=new Date("dec 5,2015 22:08:16");
// document.write("current date: "+a)
// var setHour=a.setHours("23")
// document.write("<br>1 Hour ago,it was : "+a)

// task no 12

// var a=new Date("dec 5,2015");
// document.write("current date: "+a)
// var b=new Date("dec 5,1915");
// document.write("<br>100 years ago,it was: "+b)


// task no 13




// task no 14















        








