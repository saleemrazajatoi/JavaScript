/*<-------------------------------------chapter no 6-9 Math expressions------------------------------>
// task no 1
var a=10;
document.write("RESULTS:<br> ");
document.write("the value of a is: "+a);
document.write("<br>........................................");
++a;
document.write("<br>the value of ++a is: "+a);
document.write("<br>now the value of ++a is: "+a);
document.write("<br>........................................");
document.write("<br>the value of a++ is: "+a);
a++;
document.write("<br>now the value of a++ is: "+a);
document.write("<br>........................................");
--a;
document.write("<br>the value of --a is: "+a);
document.write("<br>now the value of --a is: "+a);
document.write("<br>........................................");
document.write("<br>the value of a-- is: "+a);
a--;
document.write("<br>now the value of a-- is: "+a);
document.write("<br>........................................");
// task no 2
var a=2;
var b=1;
document.write("a is "+a);
document.write("b is "+b);
var result=--a - --b + ++b +b--;
document.write("result is  "+result);
// var c=--a;
// var d=c- --b;
// var e=d+ ++b;
// var f=e + b--;
// document.write("--a ="+c);
// document.write("<br>--a - --b ="+d);
// document.write("<br>--a - --b + ++b ="+e);
// document.write("<br>--a - --b + ++b + b-- ="+f);
// task no 3
var name=prompt("enter your name");
alert(name);
// task no 4 5
var c;
var d=+prompt("enter any number");
for(var a=1;a<=10;a++){
    for(var b=1;b<=a;b++){
        c=b*d;}
    document.write("<br>"+d+"*"+a+"  "+c);
}
// task no 6
var a=prompt("subject no 1","enter subject name");
var b=prompt("subject no 2","enter subject name");
var c=prompt("subject no 3","enter subject name");
var total=100+100+100;
var j=100;
var e=+prompt("enter obtain marks of subject "+a);
var f=+prompt("enter obtain marks of subject "+b);
var g=+prompt("enter obtain marks of subject "+c);
var obtain=e+f+g;
var per=obtain/total*100;
document.write("<center><table ><tr><th>subject</th><th>total</th><th>obtain</th><th>percentage</th></tr>
<tr><td>"+a+"</td><td>"+j+"</td><td>"+e+"</td><td>"+e+"</td></tr><tr><td>"+b+"</td>
<td>"+j+"</td><td>"+f+"</td><td>"+f+"</td></tr><tr><td>"+c+"</td><td>"+j+"</td>
<td>"+g+"</td><td>"+g+"</td></tr><tr><td></td><td><b>"+total+"</b></td>
<td><b>"+obtain+"</b></td><td><b>"+per+"</b></td></b></tr></table></center>");*/



/*<-----------------------------chapter no 9-11 User Input & Conditional Statement ---------------->
// task no 1
var city=prompt("enter your city name","example:karachi");
if(city==="karachi"){
    document.write(city+" welcome to city of lights");
}
else if(city==="islamabad"){
    document.write(city+" welcome to city of beautifullness");
}
else if(city==="multan"){
    document.write(city+" welcome to city of saints");
}
else if(city==="hyderabad"){
    document.write(city+" welcome to city of Airs");
}
else {
    document.write("welcome to "+city);
}
// task no 2
var gender=prompt("enter your gender","example:male");
if(gender==="male" || gender==="m"){
    document.write("Good Morninig Sir");
}
else if(gender==="female" || gender==="f"){
    document.write("Good Morninig Madam");
}
else {
    alert("please enter valid query");
}
// task no 3
var red=prompt("enter trafffic color RED");
var green=prompt("enter trafffic color GREEN");
var yellow=prompt("enter trafffic color YELLOW");
if(red==="red" && yellow==="yellow" && green==="green"){
document.write("<table border=1 table-stripe cellspacing=0 cellpadding=3 style=' color:blue; font-size:50px;'> <tr><th>Signal color</th><th>Message</th></tr>                                  <tr><td>red</td><td>must stop</td></tr>  <tr><td>yellow</td><td>ready to move</td></tr>  <tr><td>green</td><td>move now</td></tr> </table>   ");}
else {
    alert("please enter correct spelling of colors\n enter all small caps");
}
// task no 4
var fuel=+prompt("enter remaining fuel","for example 0.25 or 1");
if(fuel===1){
    document.write("tank is full");
}
else if(fuel===0.50){
    document.write("the tank is half");
}
else if(fuel===0.25){
    document.write("you need to refill the tank");
}
else{
    document.write(" you entered invalid value");

}
// task no 5
// a:true
// b:false
// c:codition 3 is true
// d:true
// e:not understand the question
// f:true
// task no 6
var e=+prompt("enter obtain marks of subject 1");
var f=+prompt("enter obtain marks of subject 2");
var g=+prompt("enter obtain marks of subject 3");
var total=100+100+100;
var obtain=e+f+g;
var per=obtain/total*100;
document.write("<b><h1>Marksheet</h1></b> ");
document.write("<br><b>total marks</b> "+total);
document.write("<br><b>obtain marks</b> "+obtain);
document.write("<br><b>percentage</b> "+per);
if(per>=80){
    document.write("<br> Grade A-one<br>excelent")
}
else if(per>=70){
    document.write("<br>Grade A<br>Good")
}
else if(per>=60){
    document.write("<br>Grade b<br>you need to improve")
}
else if(per<=40){
    document.write("<br>Grade d<br>Fail")
}
else{
    document.write("<br>ERROR")
}
// task no 7
var a=7;
var b=+prompt("enter number 1 to 10");
if(a===b){
    document.write("bingo ,correct");
}
else if(b===8){
    document.write("close enough");
}
else if(b===6){
    document.write("close enough");
}
else{

    document.write("error");
}
// task no 8
var a=+prompt("enter any number");
if (a%3==0){
document.write("divisable");
}
else {
    document.write("not divisable");
}
// task no 9
var a=+prompt("enter any number");
if(a % 2===0){
    document.write("even");
}
else if(a % 2===1){
    document.write("odd");
}
else{
    document.write("error");  
}
// task no 10
var a=+prompt("enter tem like 40 ");
if (a>=60){
    document.write("today is doomsday");}
else if(a>=40){
    document.write("It is too hot outside");
}
else if (a>=30){
    document.write("The Weather today is Normal.");
}
else if (a>=20){
    document.write("Today’s Weather is cool..");
}
else if (a>=10 || a<=10){
    document.write("OMG! Today’s weather is so Cool.");
}
//task no 11
var a=+prompt("enter number one");
var b=+prompt("enter number two");
var sign=prompt("enter sign like +,-,/,*,%");
var sum=a+b;
var sub=a-b;
var mul=a*b;
var div=a/b;
var rem=a%b;
if(sign==="+"){
    document.write(sum);
}
else if(sign==="-"){
    document.write(sub);
}
else if(sign==="*"){
    document.write(mul);
}
else if(sign==="/"){
    document.write(div);
}
else if(sign==="%"){
    document.write(rem);
}
else {
    document.write("error");
}*/









// <-----------------------------------chapter no 12-13------------------------------------> 


// task no 1
var a=prompt("check alphabet in assci 65 t0 90 and 97 to 122 ");
var alpha=['a','b'];
if (a>=65 && a<=97){
    document.write("upper case");
}

else if (a>=97 && a<=122){
    document.write("lower case");
}
else{
    document.write("invalid value hint:65 t0 90 or 97 to 122")
}
// task no  2
var a=prompt("enter value 1");
var b=prompt("enter value 2");
if(a>b){
    document.write(a+"is big vlaue than"+b);
}
else if(b>a){
    document.write(b+"is big vlaue than"+a);
}
else {
    document.write("ivalid value enter")
}
// task no 3
var a=prompt("enter value 1");
if (a%2===0){
    document.write("positive integer");
}
else if (a%2===1){
    document.write("negative  integer");
}
else {
    document.write("invalid");
}
// task no 4
var a=prompt("any character");
if (a==="A" || a==="a" && a==="e" || a==="E" && a==="i" || a==="I" && a==="O" || a==="o"  && a==="u" || a==="U"){
    document.write("vowels");
}
else {
    document.write("false");
}
// task no 5
var a="zameer";
var b=prompt("enter  password");
if (a===b){
    document.write("correct");
}
else{
    document.write("incorrect");
}
// task no 6
var greeting;
var hour = 13;
if (hour < 18) {
greeting = "Good day";
alert(greeting);}
else{
greeting = "Good evening";
}
// task no 7
var b=+prompt("enter hour in 24 format");
if (b===13){
alert(b+"=  1")
}
else if (b===14){
alert(b+"=  2")
}
else if (b===15){
alert(b+"=  3")
}
else if (b===16){
    alert(b+"=  4")
    }
else if (b===17){
alert(b+"=  5")
}
else if (b===18){
alert(b+" =  6")
}
else if (b===19){
alert(b+" =  7")
}
else if (b===20){
alert(b+" =  8")
}
else if (b===21){
alert(b+" =  9")
}
else if (b===22){
alert(b+" =  10")
}
else if (b===23){
alert(b+" =  11")
}
else if (b===24){
alert(b+" =  12")
}
else{alert(b+" =  "+b)}






