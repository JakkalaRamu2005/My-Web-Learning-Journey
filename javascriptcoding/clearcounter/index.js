let counterEl = document.getElementById("counter");
let clearBtn = document.getElementById("clear");
let count =0;
counterEl.textContent = count;

let uniqueId = setInterval(function(e){

    count++;
    counterEl.textContent=count;

},1000)

clearBtn.onclick=function(){
    clearInterval(uniqueId);
}




