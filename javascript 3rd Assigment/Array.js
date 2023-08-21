// <----------------------------------13 & 15---------------------------->
// task no 1
var a=[];
// task no 2
var b= [];
// task no 3
var c=["saleem"];
// task no 4
var d=[1,2,3];
// task no 5
var e=[true];

// task no 6
var f=["name","phone_no"];
f=[
    {name:"zamer", phone_no:"03087980557"},
    {name:"ali", phone_no:"03087980557"},
    {name:"ahmd", phone_no:"03087980557"},
]

console.log(f)

// taske no 7
document.write("<h1>Qualification</h1><br>")
var h=["1)SSC", "2)HSC", "3)BCS","4)BS", "5)BCOM", "6)MS",  "7)M.Phil", "9)PhD"];
// console.log(h);
document.write(h[0]+"<br>"+h[1]+"<br>"+h[2]+"<br>"+h[3]+"<br>"+h[4]+"<br>"+h[5]+"<br>"+h[6]+"<br>"
+h[7]+"<br>");

// task no 8

var names=["Saleem raza","Waseem raza","Ali raza"];
var score=[320,230,480];
document.write("Score of "+names[0] +" is "+score[0]+" = "+(320/500)*100+"%<br>");
document.write("Score of "+names[1] +" is "+score[1]+" = "+(230/500)*100+"%<br>");
document.write("Score of "+names[2] +" is "+score[2]+" = "+(480/500)*100+"%<br>");


//  task no 9
var color=["red","green","blue",];
color.unshift("orange","yellow");
color.shift();
color.pop();
color.splice(2,0,"skyblue");
color.splice(1,3);
alert(color);
var a=prompt("enter your choice color");
var b=prompt("confirm if push(end add),pop(end out),unshift(start out,shift(start add)");

if(b==="add"){
    color.push(a);
    document.write(color);
}
else if(b==="remove"){
    color.pop(a);
    document.write(color);
}
else if(b==="shift"){
    color.shift(a);
    document.write(color);
}
else if(b==="unshift"){
    color.unshift(a);
    document.write(color);
}
else {
    document.write("error");
}

// task no 10
var student=new Array(320,230,480,120);
document.write("marks of students: "+student);
student.sort();
document.write("<br>marks of students in ordered: "+student);


// task no 11
var cities=new Array("Karachi","lahore","islamabad","Quetta","Peshawar");
document.write("cities list:<br>"+cities);
var citiesCopy=cities.slice(0,1);
var a=cities.slice(3,4);
document.write("<br> list of slected cities:<br>"+citiesCopy+" "+a);

// task no 12
var arr = ["This", " is ", " my ", " cat"];
document.write("Array<br>"+arr);
var a=arr.join();
document.write("<br>String<br>"+a);
// task no 13
var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices:<br>"+devices);
document.write("<br>out<br>"+devices.shift());
document.write("<br>out<br>"+devices.shift());
document.write("<br>out<br>"+devices.shift());
document.write("<br>out<br>"+devices.shift());
// task no 14
var devices=["keyboard","mouse","printer","monitor"];
document.write("Devices:<br>"+devices);
document.write("<br>out<br>"+devices.pop());
document.write("<br>out<br>"+devices.pop());
document.write("<br>out<br>"+devices.pop());
document.write("<br>out<br>"+devices.pop());

// task no 15
var a=new Array("Apple","Samsung", "Motorola", "Nokia", "Sony" , "Haier");
document.write(a[0]+"<br>"+a[1]+"<br>"+a[2]+"<br>"+a[3]+"<br>"+a[4]+"<br>"+a[5]+"<br>");
