function showTime(){


    const time = new Date();

    let hours = time.getHours();
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();


    let ampm = hours>=12 ? "pm": "am";
if(hours>12){
    hours = hours-12;
}

if(hours==0){
    hours = 12;
}

hours = hours<10 ? '0'+hours: hours;
minutes = minutes<10 ? '0'+minutes:minutes;
seconds  = seconds <10 ? '0'+seconds: seconds;




    let currentTime = hours + ":" + minutes + ":" + seconds + " " + ampm;


    document.getElementById("clock").textContent = currentTime;


    setInterval(showTime, 1000);


}

showTime();