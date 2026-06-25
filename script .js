// Digital Clock

function updateClock(){

let now = new Date();


let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();


document.getElementById("time").innerHTML =
hours + ":" +
minutes.toString().padStart(2,'0') + ":" +
seconds.toString().padStart(2,'0');


document.getElementById("date").innerHTML =
now.toDateString();


}


setInterval(updateClock,1000);



// Attendance System

function checkIn(){

let time = new Date().toLocaleTimeString();

document.getElementById("status").innerHTML =
"Checked In at " + time;

}



function checkOut(){

let time = new Date().toLocaleTimeString();

document.getElementById("status").innerHTML =
"Checked Out at " + time;

}



// Stopwatch

let seconds = 0;
let minutes = 0;
let hours = 0;

let timer;


function startTimer(){

timer = setInterval(function(){

seconds++;


if(seconds == 60){

seconds = 0;
minutes++;

}


if(minutes == 60){

minutes = 0;
hours++;

}


document.getElementById("timer").innerHTML =
hours.toString().padStart(2,'0') + ":" +
minutes.toString().padStart(2,'0') + ":" +
seconds.toString().padStart(2,'0');


},1000);


}



function stopTimer(){

clearInterval(timer);

}



function resetTimer(){

clearInterval(timer);

seconds = 0;
minutes = 0;
hours = 0;


document.getElementById("timer").innerHTML =
"00:00:00";


}