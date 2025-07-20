let hourEl = document.getElementById("hour");
let minuteEl = document.getElementById('minute');

let secondEl = document.getElementById("seconds");

let btnEl = document.getElementById('btn');

btnEl.onclick=function(){
    let hour = parseInt(hourEl.value);
    let min = parseInt(minuteEl.value);

    let seconds = hour*60*60+min*60;
    secondEl.textContent = seconds;
  

}