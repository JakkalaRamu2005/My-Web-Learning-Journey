let StartEl = document.getElementById("Start");
let EndEl = document.getElementById("End");
let countEl = document.getElementById("count");



let btnEl = document.getElementById("button");


let id = btnEl.onclick = function () {
    
let startval = parseInt(StartEl.value);
let endVal = parseInt(EndEl.value);
    let count = startval;
    countEl.textContent = count;
   let id = setInterval(function (e) {
        count++;
        countEl.textContent = count;

        if (count == endVal) {
            clearInterval(id);
        }

    }, 1000)

}